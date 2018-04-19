import { TestWindow } from '@stencil/core/testing';
import { RecH1 } from './rec-h1';


describe('rec-h1', () => {
  it('should build', () => {
    expect(new RecH1()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: any;
	  let window: TestWindow;
    beforeEach(async () => {
      window = new TestWindow();
		  element = await window.load({
        components: [RecH1],
        html: '<rec-h1>This is my H1</rec-h1>',
      });
    });

    it('should render an h1', () => {
      expect(element.querySelector('h1')).toBeTruthy();
    });

    it('should show the h1 text', () => {
      expect(element.textContent.trim()).toEqual('This is my H1');
    });

    it('should have the rec__h1 class', async () => {
      expect(element.querySelector('h1.rec__h1')).toBeTruthy();
    });
  });
});

