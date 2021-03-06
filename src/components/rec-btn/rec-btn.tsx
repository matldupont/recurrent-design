import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'rec-btn',
  styleUrl: '../../scss/components/_rec-btn.scss',
  shadow: true
})
export class RecBtn {

  @Prop() primary: boolean;
  @Prop() inverse: boolean;
  @Prop() loading: boolean;
  @Prop() small: boolean;
  @Prop() large: boolean;

  render() {
    const primaryClass = this.primary ? 'rec__btn--primary' : '';
    const inverseClass = this.inverse ? 'rec__btn--inverse' : '';
    const smallClass = this.small ? 'rec__btn--small' : '';
    const largeClass = this.large ? 'rec__btn--large' : '';
    const combinedClasses = `${primaryClass} ${inverseClass} ${smallClass} ${largeClass}`;
    return (
      <button class={`rec__btn ${combinedClasses}`}>
        <slot />
      </button>
    );
  }
}