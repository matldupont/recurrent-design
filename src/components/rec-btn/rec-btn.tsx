import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'rec-btn',
  styleUrl: '../../scss/rec-btn.scss',
  shadow: true
})
export class RecBtn {

  @Prop() primary: boolean;
  @Prop() inverse: boolean;
  @Prop() loading: boolean;

  render() {
    const primaryClass = this.primary ? 'rec__btn--primary' : '';
    const inverseClass = this.inverse ? 'rec__btn--inverse' : '';
    return (
      <button class={`rec__btn ${primaryClass} ${inverseClass}`}>
        <slot />
      </button>
    );
  }
}