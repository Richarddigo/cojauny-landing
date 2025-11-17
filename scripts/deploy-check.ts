import { spawnSync } from 'node:child_process';

const steps = [
  { label: 'Linting', args: ['run', 'lint'] },
  { label: 'Type checking', args: ['run', 'type-check'] },
  { label: 'Unit tests', args: ['run', 'test'] },
  { label: 'Production build', args: ['run', 'build'] }
];

const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';

for (const step of steps) {
  console.log(`\n[deploy-check] ${step.label}...`);
  const result = spawnSync(npmCmd, step.args, { stdio: 'inherit', env: process.env });
  if (result.status !== 0) {
    console.error(`\n[deploy-check] ${step.label} failed. Aborting deploy.`);
    process.exit(result.status ?? 1);
  }
}

console.log('\n[deploy-check] All checks succeeded. Ready to deploy.');
