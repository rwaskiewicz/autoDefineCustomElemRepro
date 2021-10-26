import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'test-auto',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      autoDefineCustomElements: true,
    },
  ],
};
