import * as migration_20250311_070447_init from './20250311_070447_init';

export const migrations = [
  {
    up: migration_20250311_070447_init.up,
    down: migration_20250311_070447_init.down,
    name: '20250311_070447_init'
  },
];
