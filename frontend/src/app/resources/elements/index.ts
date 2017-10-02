import { PLATFORM } from 'aurelia-framework';

export function configure(aurelia): void {
  aurelia
		.globalResources([
      PLATFORM.moduleName('./show-name/show-name.element'),
      PLATFORM.moduleName('./header/header.element'),
      PLATFORM.moduleName('./footer/footer.element'),
      PLATFORM.moduleName('./box/box.element')
    ]);
}
