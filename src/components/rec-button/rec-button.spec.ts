import { flush, TestWindow } from '@stencil/core/testing';
import { RecButton } from './rec-button';


describe('rec-button', () => {
  it('should build', () => {
    expect(new RecButton()).toBeTruthy();
  });


  describe('rendering', () => {
    let element: any;
	  let window: TestWindow;
    beforeEach(async () => {
      window = new TestWindow();
		  element = await window.load({
        components: [RecButton],
        html: '<rec-button>Click Me</rec-button>',
      });
    });

    it('should render a button', () => {
      expect(element.querySelector('button')).toBeTruthy();
    });

    it('should show the button text', () => {
      expect(element.textContent.trim()).toEqual('Click Me');
    });

    it('should have the --primary if primary is true', async () => {
      expect(element.querySelector('button.rec__button--primary')).toBeFalsy();
      element.primary = true;
      await window.flush();
      expect(element.querySelector('button.rec__button--primary')).toBeTruthy();
    });

    it('should have the --inverse if inverse is true', async () => {
      expect(element.querySelector('button.rec__button--inverse')).toBeFalsy();
      element.inverse = true;
      await window.flush();
      expect(element.querySelector('button.rec__button--inverse')).toBeTruthy();
    });

  });
});