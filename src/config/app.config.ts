interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Administrator'],
  tenantName: 'Company',
  applicationName: 'Cover Book Generator',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage user information', 'Manage company details', 'Manage cover books', 'Manage reviews'],
  getQuoteUrl: 'https://app.roq.ai/proposal/3ae75179-82eb-486c-9545-81dd1e945d71',
};
