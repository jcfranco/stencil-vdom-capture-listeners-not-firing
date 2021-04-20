import { Component, h, Listen } from '@stencil/core';

@Component({
  tag: 'my-component',
  shadow: true,
})
export class MyComponent {
  @Listen('keydown', { capture: true })
  handleKeyDownCapture() {
    console.log('@Listen: keydown + capture');
  }

  @Listen('keydown')
  handleKeyDown() {
    console.log('@Listen: keydown');
  }

  render() {
    return <input onKeyDown={() => console.log('JSX: onKeyDown')}
                  onKeyDownCapture={() => console.log('JSX: onKeyDownCapture')} />;
  }
};
