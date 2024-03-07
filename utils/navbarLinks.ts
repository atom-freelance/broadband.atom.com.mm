export const NavbarLinks = [
	{ type: 'link', title: 'header.nav.home', to: '/' },
	{ type: 'link', title: 'header.nav.shop', to: '/shop' },
	{ type: 'label', title: 'header.nav.faq', subLinks: FAQLinks },
	{
		type: 'link',
		title: 'header.nav.change_ownership',
		to: '/change_ownership',
	},
]

export const FooterLinks = {
	one: [
		[
			{ type: 'label', title: 'footer.fiber' },
			{ type: 'link', title: 'footer.fiber.home_plan', to: '' },
			{ type: 'link', title: 'footer.fiber.business_plan', to: '' },
		],

		[
			{ type: 'label', title: 'footer.wireless' },
			{ type: 'link', title: 'footer.wireless.starter_kit', to: '' },
			{ type: 'link', title: 'footer.wireless.renewal_plan', to: '' },
			{ type: 'link', title: 'footer.wireless.data_addons', to: '' },
			{ type: 'link', title: 'footer.wireless.special_data_pack', to: '' },
		],

		[
			{ type: 'label', title: 'footer.flexi_net' },
			{ type: 'link', title: 'footer.flexi_net.starter', to: '' },
			{ type: 'link', title: 'footer.flexi_net.renewal_plan', to: '' },
		],
	],

	two: FAQLinks,

	three: [
		[
			{ type: 'label', title: 'footer.other' },
			{ type: 'link', title: 'footer.other.privacy_policy', to: '' },
			{ type: 'link', title: 'footer.other.tnc', to: '' },
		],
	],
}
