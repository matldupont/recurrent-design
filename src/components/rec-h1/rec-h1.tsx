import { Component } from '@stencil/core';

@Component({
  tag: 'rec-h1',
  styleUrl: '../../scss/rec-h1.scss',
  shadow: true
})
export class RecH1 {
  render() {
    return (
      <h1 class="rec__h1">
        <slot />
      </h1>
    );
  }
}