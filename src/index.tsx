/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-case-declarations */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import 'core-js/features/map';
import 'core-js/features/set';
import bridge, {
  VKBridgeEvent,
  AnyReceiveMethodName,
} from '@vkontakte/vk-bridge';
import ReactDOM from 'react-dom';
import App from 'App';
import {
  RecoilRoot,
} from 'recoil';
import {
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
} from '@vkontakte/vkui';

bridge.send('VKWebAppGetClientVersion')
  .then((data: any) => {
    document.body.setAttribute('platform', data.platform);
  });

bridge.subscribe((e: VKBridgeEvent<AnyReceiveMethodName>) => {
  if (
    process.env.NODE_ENV === 'development'
    && document.body.getAttribute('platform') === 'web'
  ) console.log(`Новое событие VKBridge: ${e.detail.type}`);

  switch (e.detail.type) {
    case 'VKWebAppUpdateConfig':
      const scheme: string = e.detail.data.scheme
        ? e.detail.data.scheme
        : 'client_light';
      document.body.setAttribute('scheme', scheme);
      if (bridge.supports('VKWebAppSetViewSettings')) {
        bridge.send('VKWebAppSetViewSettings', {
          status_bar_style: e.detail.data.scheme === 'space_gray'
            ? 'light'
            : 'dark',
          action_bar_color: e.detail.data.scheme === 'space_gray'
            ? '#19191a'
            : '#ffff',
          navigation_bar_color: e.detail.data.scheme === 'space_gray'
            ? '#2c2d2e'
            : '#ffff',
        });
      }
      break;
    default:
  }
});

ReactDOM.render(
  <RecoilRoot>
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <App />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  </RecoilRoot>,
  document.getElementById('root'),
);

setTimeout(() => {
  if (process.env.NODE_ENV === 'development') {
    import('./eruda.js').then(({
      default: eruda,
    }) => {});
  }
}, 1000);

window.onload = () => {
  bridge.send('VKWebAppInit');
};
