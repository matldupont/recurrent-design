import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'rec-button',
  styleUrl: '../../scss/rec-button.scss',
  shadow: true
})
export class RecButton {

  @Prop() primary: boolean;
  @Prop() inverse: boolean;
  @Prop() loading: boolean;

  render() {
    const primaryClass = this.primary ? 'rec__button--primary' : '';
    const inverseClass = this.inverse ? 'rec__button--inverse' : '';
    return (
      <button class={`rec__button ${primaryClass} ${inverseClass}`}>
        <slot />
      </button>
    );
  }
}