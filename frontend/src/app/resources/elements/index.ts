import { PLATFORM } from 'aurelia-framework';

export function configure(aurelia): void {
  aurelia
		.globalResources([
      PLATFORM.moduleName('./show-name/show-name.element'),
      PLATFORM.moduleName('./header/header.element'),
      PLATFORM.moduleName('./footer/footer.element'),
      PLATFORM.moduleName('./client-footer-link/client-footer-link.element'),
      PLATFORM.moduleName('./imagebox/imagebox.element'),
      PLATFORM.moduleName('./textbox/textbox.element')
    ]);
}
