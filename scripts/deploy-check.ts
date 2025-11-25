import { spawnSync } from 'node:child_process';

const steps = [
  { label: 'Linting', args: ['run', 'lint'] },
  { label: 'Type checking', args: ['run', 'type-check'] },
  { label: 'Unit tests', args: ['run', 'test'] },
  { label: 'Production build', args: ['run', 'build'] }
];

const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';

for (const step of steps) {
  const result = spawnSync(npmCmd, step.args, { stdio: 'inherit', env: process.env });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
