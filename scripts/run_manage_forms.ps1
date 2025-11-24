# Load .env.production (defaults) and then .env.local (overrides) into environment and run manage-forms
$files = @('.env.production', '.env.local')
foreach ($f in $files) {
  $envFile = Resolve-Path $f -ErrorAction SilentlyContinue
  if ($envFile -and (Test-Path $envFile)) {
    Write-Host "Loading $f"
    Get-Content $envFile | ForEach-Object {
      $line = $_.Trim()
      if ($line -and $line -notmatch '^\s*#') {
        $parts = $line -split '=',2
        if ($parts.Length -eq 2) {
          $name = $parts[0].Trim()
          $value = $parts[1].Trim()
          if ($value.StartsWith('"') -and $value.EndsWith('"')) { $value = $value.Trim('"') }
          Set-Item -Path "Env:$name" -Value $value -Force
        }
      }
    }
  }
}

# If RESEND_API_KEY is present in either file, enable use of Resend
if ($env:RESEND_API_KEY) {
  Set-Item -Path Env:USE_RESEND -Value 'true' -Force
} elseif (-not $env:USE_RESEND) {
  Set-Item -Path Env:USE_RESEND -Value 'false' -Force
}

Write-Host "Loaded env vars: BASE_URL=$env:BASE_URL, USE_RESEND=$env:USE_RESEND, RESEND_PRESENT=$([bool]$env:RESEND_API_KEY)"

# Run manage-forms function (foreground)
deno run --allow-net --allow-env --allow-read supabase/functions/manage-forms/index.ts
