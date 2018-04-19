import { flush, TestWindow } from '@stencil/core/testing';
import { RecBtn } from './rec-btn';


describe('rec-btn', () => {
  it('should build', () => {
    expect(new RecBtn()).toBeTruthy();
  });


  describe('rendering', () => {
    let element: any;
	  let window: TestWindow;
    beforeEach(async () => {
      window = new TestWindow();
		  element = await window.load({
        components: [RecBtn],
        html: '<rec-btn>Click Me</rec-btn>',
      });
    });

    it('should render a button', () => {
      expect(element.querySelector('button')).toBeTruthy();
    });

    it('should show the button text', () => {
      expect(element.textContent.trim()).toEqual('Click Me');
    });

    it('should have the default rec__btn class', () => {
      expect(element.querySelector('button.rec__btn')).toBeTruthy();
    });

    it('should have the --primary if primary is true', async () => {
      expect(element.querySelector('button.rec__btn--primary')).toBeFalsy();
      element.primary = true;
      await window.flush();
      expect(element.querySelector('button.rec__btn--primary')).toBeTruthy();
    });

    it('should have the --inverse if inverse is true', async () => {
      expect(element.querySelector('button.rec__btn--inverse')).toBeFalsy();
      element.inverse = true;
      await window.flush();
      expect(element.querySelector('button.rec__btn--inverse')).toBeTruthy();
    });

  });
});