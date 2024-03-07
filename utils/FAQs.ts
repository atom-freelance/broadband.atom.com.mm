export const FAQLinks = [
	[
		{ type: 'label', title: 'faq.home_wireless' },
		{
			type: 'link',
			title: 'faq.home_wireless.general_faq',
			to: '/faq/home_wireless-general',
		},
		{
			type: 'link',
			title: 'faq.home_wireless.monthly_quota',
			to: '/faq/home_wireless-monthly_quota',
		},
		{
			type: 'link',
			title: 'faq.home_wireless.starter_kit',
			to: '/faq/home_wireless-starter_kit',
		},
		{
			type: 'link',
			title: 'faq.home_wireless.renewal_data',
			to: '/faq/home_wireless-renewal_data',
		},
	],

	[
		{ type: 'label', title: 'faq.power_fiber' },
		{
			type: 'link',
			title: 'faq.power_fiber.general_faq',
			to: '/faq/power_fiber-general',
		},
	],
]

export type FAQSection = {
	title?: string
	faqs: { summary: string; detail: string }[]
}

export type FAQ = {
	title: string
	sections: FAQSection[]
}

export type FAQPage = {
	en: Record<string, FAQ>
	mm: Record<string, FAQ>
}

export const FAQsHomeWireless: FAQPage = {
	en: {
		general: {
			title: 'FAQs for ATOM Home Wireless',
			sections: [
				{
					title: 'Relocation',
					faqs: [
						{
							summary: 'What should I do if I want to relocate my service?',
							detail:
								'Please go to relocate request in your profile Choose the service address which you want to relocate (note: Please skip this step if you have only one service address) Check service availability in your new address Set up the date when you want to relocate Confirm to complete the relocation request process',
						},
						{
							summary: 'How many times can I request for service relocation?',
							detail:
								'You can request service relocation once in every three months.',
						},
						{
							summary:
								'How many days in advance should I need to request relocation?',
							detail:
								'Your request should be submitted at least one day in advance.',
						},
						{
							summary:
								'What will happen if I don’t move to new address at the set up date?',
							detail:
								'The service will not be work when you move to new address.',
						},
						{
							summary: 'Do I need to pay any charges for relocation?',
							detail:
								"You don't need to pay any additional charges for relocation.",
						},
						{
							summary: 'What should I do if I want to change relocation date?',
							detail: "You can't change relocation date after confirmation.",
						},
					],
				},
				{
					title: 'Application Process',
					faqs: [
						{
							summary: 'Where can I buy ATOM Home Wireless internet?',
							detail:
								'You can buy it through online or ATOM Partner. Before buying ,you have to register through broadband.atom.com.mm.',
						},
						{
							summary:
								'Why I need to check service availability at my location?',
							detail:
								'Checking coverage is needed as our service is only available in selected coverage areas with LTE/4G network.',
						},
						{
							summary: 'How can I check service availability?',
							detail:
								'You can check it here https://broadband.atom.com.mm/check-coverage by pointing the exact location in map.',
						},
						{
							summary:
								'Can I use the service in other address which is differ from registered location?',
							detail:
								"No , you can't use the service in other address which is differ from registered location.",
						},
						{
							summary:
								'What is the difference between “deliver to home” and “buy at shop” options?',
							detail:
								'“Deliver to home” is ordering through online and device is delivered within 3 days after payment. “Buy at shop” is registering through online and pay cash and collect the device from the shop near your location',
						},
						{
							summary:
								'What are the available payment method for ordering online?',
							detail:
								'Customer can pay through 1-2-3 service: Paying at any 1-2-3 service counter and presenting the payment code Mobile Banking/ ibanking Customer can pay directly by using mobile banking or mobile financial services. Customer can pay with varies payment options on broadband website. For more details, visit https://bit.ly/ATOMPayGuide',
						},
						{
							summary: 'Can I cancel my order?',
							detail:
								"You can't cancel your order after payment process is done.",
						},
					],
				},
				{
					title: 'Delivery Process',
					faqs: [
						{
							summary:
								'How many days will it take for my order to be delivered?',
							detail:
								'Your order will be delivered within minimum of 3 working days after payment process is done.',
						},
						{
							summary: 'How much is the delivery fees for order?',
							detail: 'Delivery fees is free of charge.',
						},
						{
							summary: 'Do you deliver during weekends and holidays?',
							detail:
								'Yes, our courier deliver orders weekends and holidays also.',
						},
						{
							summary:
								'What shall I receive an acknowledge receipt for my order?',
							detail:
								'Our courier will provide an acknowledgement receipt upon delivery.',
						},
					],
				},
				{
					title: 'Activation Process',
					faqs: [
						{
							summary: 'What should I do next after received Home Wireless Kit',
							detail:
								"To activate your service , please do the following steps: Connect the power adaptor the router device wait for the indicator to turn blue/cyan Connect to your router's wifi network. Wifi Name (SSID) and password (WiFi key) can be found at the bottom of the device Activate your internet. Go to http://atom.com.mm>http://atom.com.mm and you will be redirected to an activation page.",
						},
						{
							summary: 'Where can I find the device name and password?',
							detail:
								'You can see the device name and password under the router as SSID (Wireless Network Name) and wifi key (Password)',
						},
					],
				},
				{
					title: 'Document Verification',
					faqs: [
						{
							summary: 'What will happen if my upload document is not correct?',
							detail:
								'You will receive the SMS/email when your upload document is not consistent with your detail information and the service will be stopped until you upload the correct one',
						},
						{
							summary:
								'If I receive SMS of document rejected , what should I do?',
							detail: 'You need to upload the correct document again',
						},
						{
							summary:
								'Where can I re-upload the correct document (NRC/Passport)?',
							detail:
								'You can upload the document here https://bit.ly/ATOMreupload',
						},
					],
				},
				{
					title: 'Plan Renewal',
					faqs: [
						{
							summary: 'How will I know the end of my subscription',
							detail:
								'You will receive the notifications through SMS/email near the end of your subscription (7days ,1day and date of expiration)',
						},
						{
							summary: 'How to renew the subscription',
							detail:
								'When you receive the SMS notifications, a renewal link will be provided where you can renew and purchase monthly subscriptions',
						},
						{
							summary: 'How to change subscription',
							detail:
								'You can change type of subscription / plan in the renewal page',
						},
						{
							summary: 'Can I pay in advance before expiry',
							detail:
								'Yes. You can renew as early as 7 days prior to your subscription expiration',
						},
						{
							summary: 'What happens if the service is expired',
							detail: 'Your service will be discontinued.',
						},
					],
				},
				{
					title: 'Device',
					faqs: [
						{
							summary: 'What device I will get upon registration?',
							detail:
								'You will receive 1 unit router, 1 adaptor, 1 LAN cable and 1 user manual.',
						},
						{
							summary: 'How can I log into the device setting',
							detail:
								'Please enter 192.168.8.1 with user name and password as “admin”',
						},
						{
							summary: 'How to change Wifi password',
							detail:
								'Connect your Router network Enter IP address 192.168.8.1 in your browser by using “admin” as user name and password Go to > setting > WLAN basic setting You can change Network name in SSID and Password in WPA search key Then click apply',
						},
						{
							summary: 'How can I know Router is working?',
							detail:
								'The network status indicator will turn blue/cyan and the signal strength indicator will turn on when the router has successfully connected to a network',
						},
					],
				},
				{
					title: 'Fair Usage Policy',
					faqs: [
						{
							summary: 'What is Fair Usage Policy?',
							detail:
								'A very small amount of customers use an excessive amount of data, to the extent that it can affect the experience of others who use the service fairly. Fair Usage policy is to ensure that all customers are using a fair amount of data to provide the optimum internet experience to all customers. It protects consumers from heavy data users.',
						},
						{
							summary: 'What is Fair Usage level of ATOM Home Wireless?',
							detail:
								'Fair usage policy will apply on your ATOM Home Wireless Internet usage of 150 GB per 30days.',
						},
						{
							summary: 'What will happen once I have reached Fair Usage Level?',
							detail:
								'After exceeding 150 GB of usage, your Internet speed will be reduced to 0.5Mbps and continue using Unlimited Data for rest of 30 days. Normal Speed of 10 Mbps (The maximum speed can be different based on the location.) will be available at the midnight of the last day from 30days and 150 GB will start again for next 30day. The remaining quota can not be carried forward for next 30days.',
						},
						{
							summary: 'When is the effective date of FUP?',
							detail:
								'New Monthly Data Quota (Fair Usage Policy) will be effective starting from 20th May 2020 00:01 AM.',
						},
					],
				},
				{
					title: 'Product Knowledge',
					faqs: [
						{
							summary: 'What is ATOM Home Wireless Internet?',
							detail:
								'ATOM Home Wireless Internet provides a stable and reliable internet for your home It lets you enjoy a better online experience for your family with faster surfing, streaming, and downloading while keeping to your budget. It allows you to enjoy a 4G/LTE connection directly to your computer, Television, Smartphones and other smart devices via seamless WiFi access anywhere within your home.',
						},
						{
							summary: 'What speed it will provide?',
							detail:
								'The available speed is up to 10 Mbps. The maximum speed can be different based on the location.',
						},
						{
							summary: 'Why should I choose Home Wireless?',
							detail:
								'Easy to shop via online from your home, office and on the way . Easy to make payment via cash over the counter or mobile banking. Your order will be delivered to the comfort of your home/office within 3 working days',
						},
						{
							summary:
								'Can I use the service out of home/on the way/other place ?',
							detail:
								'No. It is Fixed wireless and can be used only at your registered service address.',
						},
					],
				},
				{
					title: 'Warranty',
					faqs: [
						{
							summary: 'What is the warranty period for device?',
							detail:
								'The warranty period for device is 12 months from the date of purchase.',
						},
						{
							summary: 'Which defects are covered in warranty?',
							detail:
								'The following defects are covered in warranty. Indicators are not working (power, network status, Wi-Fi, LAN/WAN, Signal Strength) Power adapter is not working Buttons failure Network port is not working',
						},
						{
							summary: 'What are not covered in warranty?',
							detail:
								"This warranty does not cover any of below: Router have been subjected to misuse, accidental, shipping or other physical damage ,improper installation, abnormal operation or handling, neglect, inundation, fire, water or other liquid intrusion; Router has been damaged due to repair, alteration, or modification by anyone not authorized by ATOM. Warranty/quality sticker or product serial number has been removed, altered or defaced Warranty/quality sticker or product serial number has been removed, altered or defaced Without valid proof of purchase Incomplete information was provided to the ATOM Broad band's authorized service/repair center.",
						},
						{
							summary: 'Where can I claim the warranty for the device?',
							detail:
								'Bring the device to the shop where you purchased it with proof of purchase.',
						},
						{
							summary:
								'Can I purchase device only if my fault device is not covered in warranty?',
							detail:
								'Only device sales is not available currently, please buy a new starter kit.',
						},
					],
				},
				{
					title: 'Data Add-Ons',
					faqs: [
						{
							summary:
								'If I have a base plan and add-on data, what will be the deduction prioritization?',
							detail:
								'Data allowance from base plan will be consumed first, followed by Add-on data',
						},
						{
							summary: 'Will the unconsumed data from Add-on be carried over?',
							detail:
								'Data add on can be carried forward as long as customer renew the base plan.',
						},
						{
							summary: 'What is the validity of Add-on pack?',
							detail:
								'Data add on can be carried forward as long as customer renew the base plan.',
						},
					],
				},
			],
		},
		monthly_quota: {
			title: 'FAQs about Monthly Quota Changes',
			sections: [
				{
					faqs: [
						{
							summary:
								'1. What are the key changes in ATOM Home Wireless from 20th May 2020 onward?',
							detail:
								'In new changes of ATOM home wireless, monthly data quota and data add on are the key changes.',
						},
						{
							summary:
								'2. What is NEW monthly data quota (Fair Usage Policy) of ATOM Home Wireless?',
							detail:
								'According to New monthly data quota (Fair usage policy) of ATOM Home Wireless Internet, previously monthly data quota of 111 GB per 30 days has been changed to 150 GB per 30 days.',
						},
						{
							summary:
								'3. What will happen once I have reached Fair Usage Level?',
							detail:
								'After exceeding 150 GB of usage, your Internet speed will be reduced to 0.5Mbps and continue using Unlimited Data for rest of 30 days. Normal Speed of 10 Mbps (The maximum speed can be different based on the location.) will be available at the midnight of the last day from 30days and 150 GB will start again for next 30day. The remaining quota can’t be carried forward for next 30days.',
						},
						{
							summary:
								'4. How will this NEW Monthly Data Quota (Fair Usage Policy) be applied to existing customers?',
							detail:
								'<p>For the customers who has already been replenished 111 GB for the first time of the subscription, monthly data quota (150 GB per month) will be replenished starting from next replenishment (2nd replenishment of the subscription).</p><p>For the customers who has already been replenished 111 GB for the second time of the subscription, monthly data quota (150 GB per month) will be replenished starting from next replenishment (3rd replenishment of the subscription).</p><p>For the customers who has already been replenished 111 GB for the third time of the subscription, customer may need to renew to enjoy 150 GB per 30 days.</p>',
						},
						{
							summary: '5. What speed it will provide?',
							detail:
								'The available speed has been changed - up to 10 Mbps. The maximum speed can be different based on the location.',
						},
						{
							summary: '6. Will there be any price changes?',
							detail: 'No, there will be no price changes.',
						},
						{
							summary:
								'7. Can data add on be carried forward to next subscription?',
							detail:
								'Yes, data add on can be carried forward if base plan is being renewal within 30 days after expired.',
						},
						{
							summary: '8. What will be the speed of data add on?',
							detail:
								'The available speed has been changed - up to 10 Mbps. The maximum speed can be different based on the location.',
						},
						{
							summary: '9. How many times data add on can be carried forward?',
							detail:
								'Data add on can be carried forward as long as customer renew the base plan.',
						},
						{
							summary:
								'10. What is the effective date of New Monthly Data Quota (Fair Usage Policy) and New Policy for Data Add on?',
							detail:
								'New Monthly Data Quota (Fair Usage Policy) and New Policy for Data Add on will be effective starting from 20th May 2020 00:01 AM.',
						},
					],
				},
			],
		},
		renewal_data: {
			title: 'FAQs about Renewal Data Add on Promotion',
			sections: [
				{
					faqs: [
						{
							summary: 'Is there any additional benefit for renewal plans?',
							detail:
								'Yes, there will be an additional data bonus for renewal plans.',
						},
						{
							summary: 'Who are eligible for renewal plans bonus?',
							detail:
								'All existing customers are eligible for the renewal data bonus.',
						},
						{
							summary: 'What is the promotion period of additional data bonus?',
							detail:
								'The promotion period of additional data bonus is from 1st Aug 2022, 00:00:01 to 31st Aug 2022. 23:59:59.',
						},
						{
							summary: 'Will advance renewal be allowed?',
							detail: 'Yes, advance renewal will be allowed.',
						},
						{
							summary: 'Is a limit for advance renewal?',
							detail: 'No, customer can renewal as much as they want to renew.',
						},
						{
							summary:
								'Can the customer who renews in advance enjoy the extra data addon promotion?',
							detail:
								'Yes, customer who renew in advance can enjoy the extra data addon.',
						},
						{
							summary:
								'What would happen if customer renewal subscription started only after promotion period?',
							detail:
								'Customer who renews within the promotion period will get the extra data addon benefit when their renewal subscriptions started.',
						},
						{
							summary:
								'How will the advance renewal work if a customer renews more than one subscription?',
							detail:
								'If a customer renews more than once within the promotion period and renewal subscription starts after the promotion period, the first renewal subscription will start once their current subscription ends and follow by another one. Extra data addon for respective subscription will be added once the renewal subscription started.',
						},
					],
				},
			],
		},
		starter_kit: {
			title: 'Additional Data Promotion for Starter Kit',
			sections: [
				{
					faqs: [
						{
							summary: 'Is there any additional benefit for starter plans?',
							detail: 'Yes, there will be an additional data bonus.',
						},
						{
							summary: 'What is the promotion period of additional data bonus?',
							detail:
								'The promotion period of additional data bonus is from 1st Aug 2022, 00:00:01 to 31st Aug 2022. 23:59:59',
						},
						{
							summary: 'Who are eligible for an additional data bonus?',
							detail:
								'Customers who subscribe and made payment of their first subscription of Wireless Broadband within the promotion period are eligible for additional data bonus.',
						},
						{
							summary:
								'What if a customer purchased within the promotion period but activated after promotion period, will the customer get the data bonus?',
							detail:
								'Yes, a data bonus will be added to their subscription. Data bonus eligibility will depend on the payment date.',
						},
						{
							summary: 'What will be the deduction prioritization?',
							detail:
								'Data allowance from base plan will be consumed first, followed by Add-on data.',
						},
						{
							summary:
								'Can this promo data be carried forward to next subscription?',
							detail:
								'If customer renew within 30 days after subscription expire, left-over data can be carried forward.',
						},
					],
				},
			],
		},
	},
	mm: {
		general: {
			title: 'FAQs for ATOM Home Wireless',
			sections: [
				{
					title: 'Relocation',
					faqs: [
						{
							summary:
								'ဝန်ဆောင်မှုကိုရွှေ့ပြောင်းအသုံးပြုလိုပါက မည်သို့ဆောင်ရွက်သင့်ပါသလဲ?',
							detail:
								'<ol><li>မိမိအကောင့်ထဲမှ နေရာရွှေ့ပြောင်းသုံးစွဲရန်ကိုရွေးပါ</li><li>လက်ရှိအသုံးပြုနေသောလိပ်စာများထဲမှ ရွှေ့ပြောင်းလိုသောလိပ်စာကိုရွေးပါ (လိပ်စာတစ်ခုတည်းရှိပါက ဤအဆင့်မလိုပါ)</li><li>လိပ်စာအသစ်တွင်ဝန်ဆောင်မှု ရနိုင် ၊ မရနိုင် ကိုစစ်ပါ</li><li>ရွှေ့ပြောင်းလိုသော ရက်စွဲကို ရွေးပါ</li><li>အချက်အလက်များ မှန်/မမှန်စစ်ဆေးပြီး အတည်ပြုပါ</li></ol>',
						},
						{
							summary:
								'နေရာရွှေ့ပြောင်းအသုံးပြုမှုကို ဘယ်နှစ်ကြိမ်လုပ်နိုင်ပါသလဲ?',
							detail: '၃ လလျှင် ၁ ကြိမ် နေရာရွှေ့ပြောင်းအသုံးပြုနိုင်ပါသည်။',
						},
						{
							summary: 'ဘယ်နှစ်ရက်ကြိုတင်၍ request လုပ်သင့်ပါသလဲ?',
							detail: 'အနည်းဆုံး ၁ ရက်ကြိုတင်၍ request လုပ်ရပါမည်။',
						},
						{
							summary:
								'မိမိအတည်ပြုထားသောရက်စွဲတွင် မရွှေ့ပြောင်းဖြစ်ပါက မည်သို့ဖြစ်နိုင်သလဲ?',
							detail:
								'လိပ်စာအသစ်တွင်မိမိအတည်ပြုထားသောရက်စွဲ၌အသုံးပြုရမည် (သို့) ဝန်ဆောင်မှု ပြတ်တောက်မှုများကြုံတွေ့နိုင်ပါသည်',
						},
						{
							summary:
								'နေရာရွှေ့ပြောင်းအသုံးပြုမှုအတွက် ဝန်ဆောင်ခပေးရန်လိုပါသလား?',
							detail: 'ဝန်ဆောင်ခပေးရန်မလိုပါ',
						},
						{
							summary: 'အတည်ပြုထားသောရက်စွဲကိုထပ်၍ပြောင်းလဲနိုင်ပါသလား?',
							detail: 'အတည်ပြုပြီးပါကပြောင်းလဲ၍မရပါ',
						},
					],
				},
				{
					title: 'Application Process',
					faqs: [
						{
							summary: 'ATOM Home အင်တာနက်ကို ဘယ်မှာဝယ်လို့ရမလဲ?',
							detail:
								'broadband.atom.com.mm တွင်ဝယ်ယူနိုင်သည်။ ATOMနှင့်ချိတ်ဆက်ထားသော အရောင်းကိုယ်စားလှယ်များတွင် ဝယ်ယူနိုင်သည်။',
						},
						{
							summary: 'ကွန်ရက်ဘယ်လိုစစ်ရမလဲ?',
							detail:
								'broadband.atom.com.mm တွင် လူကြီးမင်း၏တည်ရှိသော ကွန်ရက်ကိုစစ်ဆေးနိုင်ပါသည်၊ စက်အသုံးပြုမည့်နေရပ်လိပ်စာတွင် ရှိနိုင်သော plan အားစစ်ဆေးနိုင်သည်။',
						},
						{
							summary: 'ဘယ်လိုနည်းတွေနဲ့ငွေပေးချေရမလဲ?',
							detail:
								'<p>1-2-3 ဝန်ဆောင်မှုအသုံးပြု၍ ပေးဆောင်နိုင်မည်ဖြစ်သည်။</p>  <ol>    <li>1-2-3 service ဈေးဝယ်ကောင်တာများတွင် ပေးချေကုဒ်ကိုပြ၍ ပေးဆောင်နိုင်မည်ဖြစ်သည်။</li>    <li>အွန်လိုင်းပေးချေမှု၊ mobile banking</li>  </ol>  <br />  <p>Mobile banking နှင့် Mobile ငွေကြေး၀န်ဆောင်မှုများမှ တဆင့်ပေးဆောင်နိုင်မည်ဖြစ်သည်။</p>  <br />  <p>အခြား ငွေပေးချေမှုများဖြင့် ATOM broadband website မှ တဆင့် ပေးဆောင်နိုင်မည်ဖြစ်သည်။</p>  <br />  <p>အသေးစိတ်ကို <a target="_blank" href="https://bit.ly/ATOMPayGuide">https://bit.ly/ATOMPayGuide</a>တွင် သွားရောက်ကြည့်ရှုနိုင်သည်။</p>',
						},
						{
							summary: 'အော်ဒါကိုပြန်ဖျက်နိုင်ပါသလား?',
							detail:
								'ငွေပေးချေမှုပြီးမြောက်သွားပါက အော်ဒါကိုပြန်ဖျက်နိုင်မည်မဟုတ်ပါ။',
						},
					],
				},
				{
					title: 'Delivery Process',
					faqs: [
						{
							summary: 'ပစ္စည်းလက်ခံရရှိရန်ဘယ်လောက်ကြာမလဲ?',
							detail:
								'အော်ဒါမှာယူပြီးသည့်အချိန်မှစ၍ အနည်းဆုံး ၃ ရက်ခန့်ကြာမြင့်နိုင်ပါသည်။',
						},
						{
							summary: 'ပစ္စည်းပို့ဆောင်ခဘယ်လောက်ကျသင့်သလဲ?',
							detail:
								'ပို့ဆောင်ခမှာ အခမဲ့ဖြစ်ပါသည်။ အချို့သောနေရာများတွင် လက်ရှိဖြစ်ပေါ်နေသည့်အခြေအနေများကြောင့် လူကြီးမင်း မှာယူမည့် ATOM အိမ်သုံးကြိုးမဲ့အင်တာနက် စက်ပစ္စည်းအား အနီးစပ်ဆုံး ပစ္စည်းထုတ်ယူရမည့်နေရာတွင် သွားရောက်ထုတ်ယူရပါမည်',
						},
						{
							summary:
								'ရုံးပိတ်ရက် /အစိုးရရုံးပိတ်ရက်များတွင် ပစ္စည်းပို့ပေးပါသလား?',
							detail:
								'ဟုတ်ကဲ့ ၊ ရုံးပိတ်ရက်နှင့်အစိုးရရုံးပိတ်ရက်များ တွင်လည်းပို့ဆောင်ပေးပါသည်။',
						},
						{
							summary: 'လက်ခံရရှိကြောင်းဘယ်လို အထောက်အထား ရနိုင်လဲ ?',
							detail: 'ပို့ဆောင်သူမှလက်ခံရရှိကြောင်း receipt ပေးပါမည်။',
						},
					],
				},
				{
					title: 'Activation Process',
					faqs: [
						{
							summary: 'Router ရပြီးရင်ဘယ်လိုဆက်လုပ်သင့်သလဲ ?',
							detail:
								'<p>ဝန်ဆောင်မှုစတင်အသုံးပြုရန် အောက်ပါအဆင့်တိုင်း ဆောင်ရွက်ပါ။</p>  <ol>    <li>အားသွင်းကြိုးကို router တွင် တပ်ဆင်ပြီး အချက်ပြမီး အပြာရောင်/စိမ်းပြာရောင် ပြောင်းသွားသည် ကိုစောင့်ပေးပါ။</li>    <li>Router ၏ wifi network ကို ချိတ်ဆက်ပါ ။ Wifi အမည် (SSID) နှင့် လျှိုဝှက်နံပါတ် (Wifi Key )ကို Router ၏အောက်တွင်တွေ့မြင်နိုင်သည်။</li>    <li>အင်တာနက်ကို Activate လုပ်ပါ။ <a target="_blank" href="http://atom.com.mm>http://atom.com.mm</a> ကို ရိုက်နှိပ်လိုက်ပါက activation စာမျက်နှာသို့ရောက်ရှိသွားမည်ဖြစ်သည်။</li>  </ol>',
						},
						{
							summary: 'Device နာမည်နှင့် လျှို့ဝှက်နံပါတ်ကို ဘယ်မှာရှာရမလဲ ?',
							detail:
								'Device အမည် နှင့် လျှို့ဝှက်နံပါတ်ကို Router ၏အောက်ဖက်တွင် SSID (wifi ၏အမည်) နှင့် wifi key (လျှို့ဝှက်နံပါတ်) ကို တွေ့မြင်နိုင်သည်။',
						},
					],
				},
				{
					title: 'Document Verification',
					faqs: [
						{
							summary: 'အထောက်အထားစာရွက်များမမှန်ကန်ပါက ဘယ်လိုဖြစ်နိုင်ပါလဲ?',
							detail:
								'သင့်အနေဖြင့် SMS/Emailရရှိပါမည်။ အကြောင်းအရာအနေဖြင့် သင်၏uploadပြုလုပ်ထားသောအထောက်အထားစာရွက်များမှ သင်ကိုယ်တိုင် ဖော်ပြထားသော အသေးစိတ်အချက်လက်များနှင့် မှန်ကန်သော အထောက်အထားများပြန်လည် uploadပေးရန် ပါရှိပါသည်။',
						},
						{
							summary: 'အကယ်၍အထောက်အထားများဖယ်ကြောင်းSMSရရှိရင် ဘာလုပ်ရမလဲ?',
							detail:
								'သင့်အနေဖြင့်မှန်ကန်သောစာရွက်စာတမ်းအထောက်အထားများကို ပြန်လည် upload လုပ်ပေးနိုင်ပါသည်။',
						},
						{
							summary:
								'မှန်ကန်သော စာရွက်စာတမ်း ( မှတ်ပုံတင်/နိုင်ငံကူးလတ်မှတ်) ကို မည်သည့်နေရာတွင် ပြန်တင်နိုင်ပါသလဲ?',
							detail:
								'<p>မှန်ကန်သော စာရွက်စာတမ်း ( မှတ်ပုံတင်/နိုင်ငံကူးလတ်မှတ်) ကို အောက်ပါ link တွင်ပြန်တင်နိုင်ပါသည်။ <a target="_blank" href="https://bit.ly/ATOMreupload">https://bit.ly/ATOMreupload</a></p>',
						},
					],
				},
				{
					title: 'Plan Renewal',
					faqs: [
						{
							summary: 'ဝန်ဆောင်မှုကုန်ဆုံးချိန်ကိုဘယ်လိုသိနိုင်မလဲ ?',
							detail:
								'သင့်အနေဖြင့် ဝန်ဆောင်မှုကုန်ဆုံးရက် မတိုင်မီ ၇ရက်၊ ၁ရက် အလို နှင့် သက်တမ်းကုန်ဆုံးမည့်နေ့တွင် SMS ရရှိပါမည်။',
						},
						{
							summary: 'ဝန်ဆောင်မှုကို ဘယ်လိုဆက်လက် အသုံးပြုနိုင်မလဲ ?',
							detail:
								'ရရှိသော အသိပေး SMS အတွင်းတွင် ထပ်မံသုံးဆွဲရန် link ကိုထည့်ပေးထားပြီး ဖြစ်ပါသည်။ သင့်အနေဖြင့် ကြိုက်နှစ်ရာ လစဉ်ဝန်ဆောင်မှုကို renew လုပ်နိုင်သည်။',
						},
						{
							summary: 'ဝန်ဆောင်မှုအမျိုးအစားကိုဘယ်လိုပြောင်းနိုင်မလဲ ?',
							detail:
								'သင့်အနေဖြင့် ဝန်ဆောင်မှုအမျိုးအစားကို renew ပြုလုပ်သည် စာမျက်နှာတွင် ပြောင်းလဲနိုင်သည်။',
						},
						{
							summary: 'သက်တမ်းမကုန်ဆုံးခင်ကြိုပေးလို့ရသလား ?',
							detail:
								'သုံးစွဲသူအနေဖြင့် ကုန်ဆုံးရက်မတိုင်မီ ၇ ရက်အလိုတွင် စတင်ပေးဆောင်နိုင်ပါသည်။',
						},
						{
							summary: 'အကယ်၍ဝန်ဆောင်မှုသက်တမ်းကုန်သွားရင်ဘယ်လိုဖြစ်မလဲ ?',
							detail: 'ဝန်ဆောင်မှုဖြတ်တောက်သွားပါမည်။',
						},
					],
				},
				{
					title: 'Device',
					faqs: [
						{
							summary:
								'အော်ဒါပို့ဆောင်မှုတွင် မည်သည့်ပစ္စည်း များလက်ခံရရှိပါမည်လဲ?',
							detail:
								'Wifi- Router စက် ၁ခု၊ ပါဝါကြိုး ၁ခု၊ LAN ကြိုး ၁ ခု နှင့် အသုံးပြုနည်း လမ်းညွှန်',
						},
						{
							summary: 'Router စက်၏အာမခံကာလဘယ်လောက်လဲ?',
							detail: 'Router စက်၏အာမခံကာလမှာ ဝယ်ယူပြီး ၁၂ လအတွင်း ဖြစ်ပါသည်',
						},
						{
							summary: 'Device Setting ထဲကို ဘယ်လိုဝင်ရမလဲ?',
							detail:
								'Browserတွင် 192.168.8.1 ကို ရိုက်ထည့်၍ name နှင့် password နေရာတွင် “admin”ဟုရိုက်ထည့်ပါ။',
						},
						{
							summary: 'Wifi Password ကိုဘယ်ကိုပြောင်းလို့ရမလဲ?',
							detail:
								'<ol>  <li>Router သို့ချိတ်ဆက်ပါ။</li>  <li>IP address 192.168.8.1ကို သင်၏device browseတွင်ရိုက်ထည့်ပါ။</li>  <li>ပြီးနောက် setting>WLAN basic setting သို့သွားပါ။</li>  <li>သင့်အနေဖြင့် Network name (SSID)ကို ကြိုက်နှစ်သက်ရာပြောင်းနိုင်ပါသည်။ လျှို့ဝှက်နံပါတ်ကို WPA search Key နေရာတွင်ပြောင်းလဲနိုင်သည်။</li></ol>',
						},
						{
							summary: 'Router အလုပ်လုပ်နေလား ဆိုတာ ဘယ်လိုသိနိုင်မလဲ?',
							detail:
								'ကွန်ယက်အခြေအနေအချက်ပြမီး အပြာရောင်/စိမ်းပြာရောင် နှင့် လိုင်းဆွဲအားအချက်ပြမီး အဖြူရောင်သို့ပြောင်းပါက အင်တာနက်ကွန်ယက်နှင့်ချိတ်ဆက်ထားပြီးဖြစ်ပါသည်',
						},
					],
				},
				{
					title: 'Fair Usage Policy',
					faqs: [
						{
							summary: 'မျှတစွာသုံးစွဲခြင်း မူဝါဒ ဆိုတာ ဘာလဲ?',
							detail:
								'အချို့သော ဝန်ဆောင်မှု သုံးစွဲသူများသည် ပုံမှန်သုံးစွဲသော အတိုင်းအတာပမာဏထက် ကျော်လွန်သုံးစွဲမှုများပြုလုပ်နိုင်သောကြောင့် အခြားပုံမှန်သုံးစွဲသူများကို ထိခိုက်လာနိုင်ပါသည်။ထို့ကြောင့် သုံးစွဲသူများကြား ညီမျှသော ဝန်ဆောင်မှုအတွေ့အကြုံကောင်းများ ရရှိနိုင်ရေးအတွက် သုံးစွဲသူများအားလုံးလိုက်နာရန် မျှတစွာသုံးစွဲခြင်းမူဝါဒကို ချမှတ်ထားခြင်းဖြစ်ပါသည်။',
						},
						{
							summary:
								'ATOM အိမ်သုံးကြိုးမဲ့ အင်တာနက်အတွက် မျှတစွာသုံးစွဲခြင်းမူဝါဒ အရချမှတ်ထားသော ဒေတာပမာဏမှာ ဘယ်လောက်လဲ',
							detail:
								'မျှတစွာသုံးစွဲခြင်းမူဝါဒအရ ATOM ဧည့်အိမ်သုံးကြိုးမဲ့ အင်တာနက်အတွက် ရက်၃၀ ကို 150GB ရရှိမည်ဖြစ်သည်။',
						},
						{
							summary:
								'သတ်မှတ်ထားသော အများဆုံးသုံးစွဲနိုင်သော ပမာဏသို့ ရောက်ရှိ ပါက မည်သို့ဖြစ်နိုင်ပါသလဲ',
							detail:
								'မျှတစွာသုံးစွဲခြင်းမူဝါဒအရ ATOMဧည့်အိမ်သုံးကြိုးမဲ့ အင်တာနက်အတွက် ရက်၃၀ ကို မြန်နှုန်း 10Mbps ဖြင့် 150GB ရရှိမည်ဖြစ်ပြီး 150GB ထက်ကျော်လွန်အသုံးပြုပါက ရက်၃၀ အတွင်း ကျန်ရှိသောရက်များကိုမြန်နှုန်း 0.5Mbps ဖြင့် အကန့်အသတ်မရှိဒေတာကို ဆက်လက်အသုံးပြုနိုင်မည်ဖြစ်သည်။ ပထမရက် ၃၀ ကုန်ဆုံးသည့်နေ့တွင် မြန်နှုန်း 10Mbps ဖြင့် ပြန်လည်အသုံးပြုနိုင်မည်ဖြစ်ပြီး နောက်ရက်၃၀ အတွက် မျှတစွာသုံးစွဲမှူပမာဏ 150GB ရရှိမည်ဖြစ်ပါသည်။',
						},
						{
							summary:
								'မျှတစွာသုံးစွဲခြင်းမူဝါဒသည် မည်သည့်အချိန်မှစ၍ အကျုံးဝင်မည်လဲ',
							detail:
								'၂၀၁၉ ဇန်နဝါရီ ၈ ရက်နေ့မှစတင်၍ဝန်ဆောင်မှုကိုဝယ်ယူသုံးစွဲသူများ သည် ၂၀၁၉ ဇန်နဝါရီ ၈ ရက်မှစတင်၍ မျှတစွာသုံးစွဲခြင်းမူဝါဒ သက်ရောက်မည်ဖြစ်ပါသည်။ လက်ရှိဝန်ဆောင်မှု သုံးစွဲသူများသည် ဇန်နဝါရီလ ၁၅ ရက်မှစ၍ သက်တမ်းတိုးခြင်းအတွက် မျှတစွာသုံးစွဲခြင်းမူဝါဒ သက်ရောက်မည်ဖြစ်ပါသည်။',
						},
					],
				},
				{
					title: 'Product Knowledge',
					faqs: [
						{
							summary: 'ATOM Home Wireless Internet ဆိုတာဘာလဲ?',
							detail:
								'<p>ATOM Home Wireless Internet သည် တည်ငြိမ်ပြီး ယုံကြည်ရသော အင်တာနက်လိုင်းကို လူကြီးမင်း၏ အိမ်၌အသုံးပြုနိုင်သော ဝန်ဆောင်မှုဖြစ်သည်။</p><p>ဤဝန်ဆောင်မှုဖြင့် လူကြီးမင်း၏မိသားစုအတွက် ပိုမိုကောင်းမွန်သောအင်တာနက်ဝန်ဆောင်မှုများ (ဥပမာ - အင်တာနက်စာမျက်နှာများကြည့်ရှုခြင်း၊ တိုက်ရိုက်ရုပ်သံများကြည့်ရှုခြင်း၊ downloadဆွဲခြင်း)တို့ကို ချိုသာသောဈေးနှုန်းဖြင့် သုံးစွဲနိုင်သည်။</p><p>4G/LTE ကွန်ရက်ကိုအသုံးပြုကာ လူကြီးမင်း၏နေအိမ်အတွင်းရှိ TV, Smart Phone နှင့် အခြားသော နည်းပညာဖြင့် အသုံးဆောင်ပစ္စည်းများကို Wifiမှတဆင့် ကြိုးမဲ့ ချိတ်ဆက် အသုံးပြုနိုင်ပါသည်။</p>',
						},
						{
							summary: 'ဘယ်လောက်မြန်နှုန်းကိုထောက်ပံ့ပေးမလဲ?',
							detail: 'အမြင့်ဆုံးမြန်နှုန်း၅မီဂါဘစ် ကိုရရှိပါမည်။',
						},
						{
							summary: 'Home Wireless ကို ဘာကြောင့်ရွေးချယ်သင့်သလဲ?',
							detail:
								'သင့်အိမ်၊ ရုံး၊ ရောက်ရှိရာအရပ်၌တွင်ပင် Onlineမှတဆင့်ဝယ်ယူနိုင်ခြင်း။ ငွေပေးချေမှုအပိုင်းမှာလည်းဈေးဝယ်ကောင်တာပေးစနစ်(သို့)mobile Bankingဖြင့် လွယ်ကူစွာပေးချေနိုင်ခြင်း။ အိမ်အရောက်ပစ္စည်းပို့ဆောင်မှုကို ရုံးဖွင့်ရက်(၃)ရက်အတွင်း ပို့ဆောင်ပေးပါသည်။',
						},
						{
							summary:
								'ဝန်ဆောင်မှုကို အိမ်အပြင်၊ လမ်းပေါ်၊ အခြားနေရာတွေမှသုံးလို့ရနိုင်ပါသလား?',
							detail:
								'အသုံးပြု၍မရပါ။ လူကြီးမင်း မှတ်ပုံတင်ထားသော နေရပ်လိပ်စာ၌ အသုံးပြုနိုင်ပါသည်။',
						},
					],
				},
				{
					title: 'Warranty',
					faqs: [
						{
							summary: 'Router စက်၏အာမခံကာလမှာဘယ်လောက်လဲ',
							detail:
								'Router စက်၏အာမခံကာလမှာ ဝယ်ယူသည့်နေ့စွဲမှ (၁)နှစ်အတွင်းဖြစ်သည်။',
						},
						{
							summary: 'မည်သည့်ချို့ယွင်းချက်များအတွက်အာမခံပေးထားသလဲ',
							detail:
								'<p>အောက်ပါ ချို့ယွင်းချက်များအတွက် အာမခံရှိပါသည်။</p><ol><li>ညွှန်ပြသော ကိရိယာမီးများ (indicators)များ အလုပ်မလုပ်ခြင်း (ပါဝါမီး၊ ကွန်ယက်အခြေအနေ၊ Wi-Fi၊ LAN/WAN၊ Signal Strength)</li>    <li>ပါဝါမီးကြိုးအလုပ်မလုပ်ခြင်း</li>    <li>ခလုတ်များ အလုပ်မလုပ်ခြင်း</li>    <li>Network port အလုပ်မလုပ်ခြင်း</li>  </ol>',
						},
						{
							summary: 'မည်သည့်ချို့ယွင်းချက်များအတွက်အာမခံမရရှိပါသလဲ',
							detail:
								'<p>အောက်ပါ ချို့ယွင်းမှုများအတွက် အာမခံပေးခြင်း မရှိပါ။</p>  <ol>    <li>Router အား အလွဲသုံးစားပြုလုပ်ခြင်း၊ မတော်တဆဖြစ်ခြင်း၊ ရွှေ့ပြောင်းခြင်း နှင့် အခြားရုပ်ပိုင်းဆိုင်ရာ ပျက်စီးမှုများ၊ မလျော်ကန်စွာ တပ်ဆင်ခြင်း၊ ပုံမှန်မဟုတ်စွာ ကိုင်တွယ်အသုံးပြုခြင်း၊ ပစ်ထားခြင်း၊ ရေလွှမ်းမိုးမှု၊ မီး၊ ရေ နှင့် အခြားသောအရည်များကြောင့် ပျက်စီးခြင်း</li>    <li>ATOMမှ လုပ်ပိုင်ခွင့်မပေးထားသော အခြားတစ်ယောက်၏ ပြုပြင်မှု (သို့) ပြောင်းလဲမှုကြောင့် Router ပျက်စီးမှုဖြစ်ခြင်း</li>    <li>ATOM branded မဟုတ်သော ထုတ်ကုန်(သို့)ဆက်စပ်ပစ္စည်းများ အသုံးပြုခြင်းကြောင့် ချို့ယွင်းချက် (သို့) ပြဿနာများဖြစ်ခြင်း</li>    <li>အာမခံ/quality စတစ်ကားများ (သို့) ပစ္စည်း၏ စီရီယာယ်နံပါတ်အား ခွာထားခြင်း (သို့) ပြောင်းလဲထားခြင်း (သို့) ဖတ်မရအောင် ပျက်စီးနေခြင်း</li>    <li>ဝယ်ယူထားခြင်းနှင့် ပတ်သက်၍ ခိုင်လုံသော အထောက်ထားမပါခြင်း</li>    <li>ATOM Broadband လုပ်ပိုင်ခွင့်ပေးထားသော ပြုပြင်ရေးစင်တာသို့ မပြည့်စုံသော အချက်အလက်များသာ ပေးထားခြင်း</li>  </ol>',
						},
						{
							summary: 'အာမခံ ခံစားခွင့်ကိုဘယ်လိုရယူမလဲ',
							detail:
								'စက်ကို မိမိဝယ်ယူခဲ့သောဆိုင်သို့ ယူသွားပြီး စစ်ဆေးနိုင်ပါသည်။',
						},
						{
							summary:
								'Router စက်ချို့ယွင်းမှုသည် အာမခံ ခံစားခွင့်မရရှိပါက စက်ကိုပြန်လည်ဝယ်ယူနိုင်ပါသလား',
							detail:
								'Router စက်သီးသန့်ဝယ်ယူ၍မရနိုင်သည့်အတွက် Home Wireless Kit ကိုသာဝယ်ယူနိုင်ပါသည်။',
						},
					],
				},
				{
					title: 'Data Add-Ons',
					faqs: [
						{
							summary:
								'Base plan ဒေတာ နှင့် Add-on ဒေတာတွင် အသုံးပြုမှုများသည် မည်သည့်ဒေတာမှအရင်နှုတ်ယူမလဲ?',
							detail: 'Base plan ဒေတာမှ အရင်နှုတ်ယူပါမည်',
						},
						{
							summary: 'Add-on ပိုသောဒေတာများကို ဆက်လက်သယ်ယူအသုံးပြု၍ရပါသလား?',
							detail:
								'Add-on ပိုသောဒေတာများကို Base plan သက်တမ်းအတွင်းတွင် သယ်ယူအသုံးပြုနိုင်ပါသည်',
						},
						{
							summary: 'Add-on ဒေတာကိုမည်သည့်အချိန်အထိ အသုံးပြုနိုင်သလဲ?',
							detail:
								'Add-on ဒေတာကို Base plan သက်တမ်းကုန်သည်အထိအသုံးပြုနိုင်ပါသည်',
						},
					],
				},
			],
		},
		monthly_quota: {
			title: 'လစဉ်ဒေတာသတ်မှတ်ချက်ပမာဏ ပြောင်းလဲမှုနှင့်ပတ်သက်သမျှ',
			sections: [
				{
					faqs: [
						{
							summary:
								'1. ATOM Home Wireless ကို မေလ ၂၀ ရက်နေ့ မှ စတင်၍ မည်သည်တို့ကိုအဓိကပြောင်းလဲထားသနည်း?',
							detail:
								'မေလ ၂၀ ရက်နေ့ မှ စတင်၍ ATOM အိမ်သုံးကြိုးမဲ့ အင်တာနက် ၏ လစဉ်ဒေတာသတ်မှတ်ချက် နှင့်ထပ်တိုးဒေတာအစီအစဉ် တို့ကို အဓိကပြောင်းလဲထားပါသည်။',
						},
						{
							summary:
								'2. ATOM အိမ်သုံးကြိုးမဲ့ အင်တာနက်အတွက် လစဉ်ဒေတာသတ်မှတ်ချက် ပမာဏ အသစ် (မျှတစွာသုံးစွဲခြင်းမူဝါဒ)မှာ မည်မျှနည်း?',
							detail:
								'ATOM အိမ်သုံးကြိုးမဲ့ အင်တာနက်အတွက် လစဉ်သတ်မှတ်ချက် ဒေတာပမာဏ (မျှတစွာသုံးစွဲခြင်းမူဝါဒ) ကို ယခင် ရက်30 အတွက်111GB မှ ယခု ရက်30 အတွက်150 GB သို့ပြောင်းလဲထားပါသည်။',
						},
						{
							summary:
								'3. သတ်မှတ်ထားသော အများဆုံးသုံးစွဲနိုင်သော ပမာဏသို့ ရောက်ရှိ ပါက မည်သို့ဖြစ်နိုင်ပါသလဲ?',
							detail:
								'ATOM ၏အိမ်သုံးကြိုးမဲ့ အင်တာနက်အတွက် ရက်၃၀ ကို မြန်နှုန်း 10Mbps (ရရှိနိုင်သောအမြင့်ဆုံးမြန်နှုန်းသည် Service Location ရရှိမှုပေါ်တွင်မူတည်ပါသည်) ဖြင့် 150GB (မျှတစွာသုံးစွဲခြင်းမူဝါဒအရ )ရရှိမည်ဖြစ်ပြီး 150 GB ထက်ကျော်လွန်အသုံးပြုပါက ရက်၃၀ အတွင်း ကျန်ရှိသောရက်များကိုမြန်နှုန်း 0.5Mbps ဖြင့် အကန့်အသတ်မရှိဒေတာကို ဆက်လက်အသုံးပြုနိုင်မည်ဖြစ်သည်။ ပထမရက် ၃၀ ကုန်ဆုံးသည့်နေ့တွင် မြန်နှုန်း 10Mbps ဖြင့် ပြန်လည်အသုံးပြုနိုင်မည်ဖြစ်ပြီး နောက်ရက်၃၀ အတွက် မျှတစွာသုံးစွဲမှူပမာဏ 150 GB ရရှိမည်ဖြစ်ပါသည်။',
						},
						{
							summary:
								'4. လက်ရှိသုံးစွဲနေသူများအတွက်မည်ကဲ့သို့သက်ရောက်မှုရှိမည်နည်း?',
							detail:
								'<p>လက်ရှိသုံးစွဲနေသူများ တွင် ပထမအကြိမ် 111 GB ရရှိပြီးထားသော သူများ သည် ဒုတိယအကြိမ်မှစတင်၍ 150 GB ရရှိမည်ဖြစ်သည်</p><p>လက်ရှိသုံးစွဲနေသူများ တွင် ဒုတိယအကြိမ် 111 GB ရရှိပြီးထားသော သူများ သည် တတိယအကြိမ်မှစတင်၍ 150 GB ရရှိမည်ဖြစ်သည်</p><p>လက်ရှိသုံးစွဲနေသူများ တွင် တတိယအကြိမ် 111 GB ရရှိပြီးထားသော သူများ သည် 150 GB ရရှိရန်နောက် တစ်ကြိမ်သက်တမ်းတိုးရန် လိုအပ်ပါမည်</p>',
						},
						{
							summary: '5. ဘယ်လောက်မြန်နှုန်းကိုထောက်ပံ့ပေးမလဲ?',
							detail:
								'မြန်နှုန်းကို 10 Mbps အထိတိုးမြှင့်ပေးထားပါသည်။ ရရှိနိုင်သောအမြင့်ဆုံးမြန်နှုန်းသည် Service Location ရရှိမှုပေါ်တွင်မူတည်ပါသည်',
						},
						{
							summary: '6. စျေးနှုန်းအပြောင်းအလဲရှိမလား?',
							detail: 'စျေးနှုန်းအပြောင်းအလဲမရှိပါ',
						},
						{
							summary:
								'7. ထပ်တိုးဒေတာအစီအစဉ်တွင် ပိုသောဒေတာများကို ဆက်လက်သယ်ယူအသုံးပြု၍ရပါသလား?',
							detail:
								'ထပ်တိုးဒေတာအစီအစဉ်တွင် ဒေတာကျန်ရှိနေပြီး Base Plan ကိုသက်တမ်းကုန်ဆုံးသည့်ရက်မှရက် 30 မတိုင်မီ သက်တမ်းတိုးလျှင်သယ်ယူအသုံးပြုနိုင်ပါသည်',
						},
						{
							summary:
								'8. ထပ်တိုးဒေတာအစီအစဉ်တွင် မည်သည့်မြန်နှုန်းဖြစ်သွားမည်နည်း?',
							detail:
								'မြန်နှုန်းကို 10 Mbps အထိတိုးမြှင့်ပေးထားပါသည်။ ရရှိနိုင်သောအမြင့်ဆုံးမြန်နှုန်းသည် Service Location ရရှိမှုပေါ်တွင်မူတည်ပါသည်',
						},
						{
							summary:
								'9. ထပ်တိုးဒေတာအစီအစဉ်ကို ဘယ်နှစ်ကြိမ် သယ်ဆောင် အသုံးပြုသွားနိုင်ပါသလဲ?',
							detail:
								'Base Plan ကို သက်တမ်းကုန်ဆုံးသည့်ရက်မှရက် 30 မတိုင်မီ သက်တမ်းတိုးနေသေးသရွေ့ သယ်ဆောင်အသုံးပြုသွားနိုင်ပါသည်',
						},
						{
							summary:
								'10. လစဉ်ဒေတာသတ်မှတ်ချက် ပမာဏ အသစ် နှင့်ထပ်တိုးဒေတာအစီအစဉ် သည် မည်သည့်အချိန်မှစ၍ အကျုံးဝင်မည်လဲ?',
							detail:
								'၂၀၂၀ မေလ ၂၀ ရက်နေ့ ၀၀း၀၁ နာရီမှစတင်၍ လစဥ် ဒေတာသတ်မှတ်ချက် ပမာဏ အသစ် မြှင့်တင်သုံးစွဲမှုမူဝါဒ နှင့် ထပ်တိုးဒေတာအစီစဥ်အသစ် စတင်သတ်ရောက်မည်ဖြစ်ပါသည်။',
						},
					],
				},
			],
		},
		renewal_data: {
			title: 'FAQs about Renewal Data Add on Promotion',
			sections: [
				{
					faqs: [
						{
							summary: 'Is there any additional benefit for renewal plans?',
							detail:
								'Yes, there will be an additional data bonus for renewal plans.',
						},
						{
							summary: 'Who are eligible for renewal plans bonus?',
							detail:
								'All existing customers are eligible for the renewal data bonus.',
						},
						{
							summary: 'What is the promotion period of additional data bonus?',
							detail:
								'The promotion period of additional data bonus is from 1st Aug 2022, 00:00:01 to 31st Aug 2022. 23:59:59.',
						},
						{
							summary: 'Will advance renewal be allowed?',
							detail: 'Yes, advance renewal will be allowed.',
						},
						{
							summary: 'Is a limit for advance renewal?',
							detail: 'No, customer can renewal as much as they want to renew.',
						},
						{
							summary:
								'Can the customer who renews in advance enjoy the extra data addon promotion?',
							detail:
								'Yes, customer who renew in advance can enjoy the extra data addon.',
						},
						{
							summary:
								'What would happen if customer renewal subscription started only after promotion period?',
							detail:
								'Customer who renews within the promotion period will get the extra data addon benefit when their renewal subscriptions started.',
						},
						{
							summary:
								'How will the advance renewal work if a customer renews more than one subscription?',
							detail:
								'If a customer renews more than once within the promotion period and renewal subscription starts after the promotion period, the first renewal subscription will start once their current subscription ends and follow by another one. Extra data addon for respective subscription will be added once the renewal subscription started.',
						},
					],
				},
			],
		},
		starter_kit: {
			title: 'Additional Data Promotion for Starter Kit',
			sections: [
				{
					faqs: [
						{
							summary: 'Is there any additional benefit for starter plans?',
							detail: 'Yes, there will be an additional data bonus.',
						},
						{
							summary: 'What is the promotion period of additional data bonus?',
							detail:
								'The promotion period of additional data bonus is from 1st Aug 2022, 00:00:01 to 31st Aug 2022. 23:59:59',
						},
						{
							summary: 'Who are eligible for an additional data bonus?',
							detail:
								'Customers who subscribe and made payment of their first subscription of Wireless Broadband within the promotion period are eligible for additional data bonus.',
						},
						{
							summary:
								'What if a customer purchased within the promotion period but activated after promotion period, will the customer get the data bonus?',
							detail:
								'Yes, a data bonus will be added to their subscription. Data bonus eligibility will depend on the payment date.',
						},
						{
							summary: 'What will be the deduction prioritization?',
							detail:
								'Data allowance from base plan will be consumed first, followed by Add-on data.',
						},
						{
							summary:
								'Can this promo data be carried forward to next subscription?',
							detail:
								'If customer renew within 30 days after subscription expire, left-over data can be carried forward.',
						},
					],
				},
			],
		},
	},
}

export const FAQsPowerFiber: FAQPage = {
	en: {
		general: {
			title: 'FAQs for ATOM Home Fiber',
			sections: [
				{
					title: 'Application Process',
					faqs: [
						{
							summary: 'Where can I buy ATOM Home Fiber internet?',
							detail:
								'You can buy ATOM Home Fiber internet service through online. Before buying ,you have to register through broadband.atom.com.mm.',
						},
						{
							summary:
								'Why I need to check service availability at my location?',
							detail:
								'Checking service availability is required to know that Fiber internet service is available at your location or not.',
						},
						{
							summary: 'How can I check service availability?',
							detail:
								'<p>You can check it here <a target="_blank" href="https://broadband.atom.com.mm/check-coverage">https://broadband.atom.com.mm/check-coverage</a> by pointing the exact location in map.</p>',
						},
						{
							summary:
								'What are the available payment method for ordering service installation?',
							detail:
								'<p>Customer can pay through 1-2-3 service:</p><ol><li>Paying at any 1-2-3 service counter and presenting the payment code</li><li>Mobile Banking/ ibanking</li><li>Web pay For more details, visit <a target="_blank" href="https://bit.ly/ATOMPayGuide">https://bit.ly/ATOMPayGuide</a></li></ol>',
						},
						{
							summary: 'Can I cancel my order?',
							detail:
								"You can't cancel your order after payment process is done.",
						},
					],
				},
				{
					title: 'Document Verification',
					faqs: [
						{
							summary: 'What will happen if my upload document is not correct?',
							detail:
								'You will receive the SMS/email when your upload document is not consistent with your detail information and the service will be stopped until you upload the correct one',
						},
						{
							summary:
								'If I receive SMS of document rejected , what should I do?',
							detail: 'You need to upload the correct document again',
						},
					],
				},
				{
					title: 'Installation',
					faqs: [
						{
							summary:
								'How long do I need to wait for installation after order submission?',
							detail:
								'Customers will be contacted within 2 business days for installation appointment once payment is done for submitted order.',
						},
					],
				},
				{
					title: 'Service',
					faqs: [
						{
							summary:
								'Is ATOM Broadband service available during power outage?',
							detail:
								"ATOM Broadband has a local power back up that guarantees that the service can be delivered during a power outage of up to 8 hours. (Getting power for router, that creates wifi, is customers' responsibility to enable wireless services to work)",
						},
						{
							summary:
								"How different is your fiber broadband from the wifi I'm using?",
							detail:
								'Very, ATOM Broadband has a dedicated speed only for you and you can connect a cable in your outlet/router to guarantee the best speed. In your own wifi you will also be able to decide the amount of users on your connection. The router is also much closer to you which is important as all walls and distance has a negative impact on the quality of the service.',
						},
						{
							summary:
								'As future proof, how does ATOM Broadband guarantee for high quality and service?',
							detail:
								'ATOM Broadband will be installed with a fiber connection that can handle speeds up to 1 Gigabit. This means that Quality and Speed guarantees ability for gaming, watching streamed TV/movies..',
						},
					],
				},
				{
					title: 'Subscription',
					faqs: [
						{
							summary:
								'Is ATOM Home Fiber Internet service is Prepaid or Postpaid subscription?',
							detail:
								'ATOM Home Fiber Internet service is Prepaid subscription for now.',
						},
						{
							summary:
								'In which kind of situation, my subscription will be suspended or terminated?',
							detail:
								"If you don't make bill payment till your pay due date, your subscription will be suspended. Your subscription will be terminated automatically if your subscription suspended period is 60 days long. And customer shall be responsible for returning the routers and equipment installed for ATOM Power Fiber in good working condition as at the date of installation.",
						},
						{
							summary:
								'What should I need to do if want to reactivate service back?',
							detail:
								'<p>Reactivation will be only available for the customer who are less than 60 days suspension period.</p><p>For reactivation request, there will two options.</p><p>Option 1: Please go to your profile page from this link Profile , choose your order ID and submit reactivation request.</p><p>Option 2: Please contact to ATOM Broadband Call Center and ask to make reactivation by providing your CustomerID.</p>',
						},
					],
				},
				{
					title: 'Billing & Payment',
					faqs: [
						{
							summary:
								'How long does it takes to reopen internet line for suspended customers after payment?',
							detail:
								'Your line will be reopened within 4 working hours in the same day.',
						},
					],
				},
				{
					title: 'Speed & Usage',
					faqs: [
						{
							summary: 'How is network stability?',
							detail:
								'The network is very stable and the speed to the router will always be the same, you can connect many users to the router but more users will affect the experience for each user.',
						},
						{
							summary: 'Is ATOM Fiber Internet service unlimited?',
							detail:
								'Yes, you may use as much data as you want but you are not allowed to share or resell the service.',
						},
						{
							summary: 'How much can surf with ATOM Broadband?',
							detail:
								'<p>�Can surf as much as you want�</p><ol><li>With ATOM Broadband you can surf as much as you like in the speed that you have chosen for your service.</li><li>All customers get a Wifi router that enables customers to do mobile surfing as well as fixed surfing using a cable to a computer or other device.</li></ol>',
						},
						{
							summary: 'Can several users simultaneously use?',
							detail:
								'Yes, ATOM Broadband services are offered in different speeds and different prices. For different price plans of services � will have different ability for number of people that can use service.',
						},
						{
							summary: 'Can customers upgrade or downgrade speed?',
							detail:
								'Customer can upgrade speed while renewing for next subscription and are allowed to downgrade speed only after 90 days.',
						},
						{
							summary:
								'Is there compensation if downtime is very long? What will you do for us when your network is down for a very long period?',
							detail:
								'If network is down for a long time (longer then a week) there will be a compensation for paying customer.',
						},
					],
				},
			],
		},
	},
	mm: {
		general: {
			title: 'FAQs for ATOM Home Fiber',
			sections: [
				{
					title: 'Application Process',
					faqs: [
						{
							summary: 'Where can I buy ATOM Home Fiber internet?',
							detail:
								'You can buy ATOM Home Fiber internet service through online. Before buying ,you have to register through broadband.atom.com.mm.',
						},
						{
							summary:
								'Why I need to check service availability at my location?',
							detail:
								'Checking service availability is required to know that Fiber internet service is available at your location or not.',
						},
						{
							summary: 'How can I check service availability?',
							detail:
								'<p>You can check it here <a target="_blank" href="https://broadband.atom.com.mm/check-coverage">https://broadband.atom.com.mm/check-coverage</a> by pointing the exact location in map.</p>',
						},
						{
							summary:
								'What are the available payment method for ordering service installation?',
							detail:
								'<p>Customer can pay through 1-2-3 service:</p><ol><li>Paying at any 1-2-3 service counter and presenting the payment code</li><li>Mobile Banking/ ibanking</li><li>Web pay For more details, visit <a target="_blank" href="https://bit.ly/ATOMPayGuide">https://bit.ly/ATOMPayGuide</a></li></ol>',
						},
						{
							summary: 'Can I cancel my order?',
							detail:
								"You can't cancel your order after payment process is done.",
						},
					],
				},
				{
					title: 'Document Verification',
					faqs: [
						{
							summary: 'What will happen if my upload document is not correct?',
							detail:
								'You will receive the SMS/email when your upload document is not consistent with your detail information and the service will be stopped until you upload the correct one',
						},
						{
							summary:
								'If I receive SMS of document rejected , what should I do?',
							detail: 'You need to upload the correct document again',
						},
					],
				},
				{
					title: 'Installation',
					faqs: [
						{
							summary:
								'How long do I need to wait for installation after order submission?',
							detail:
								'Customers will be contacted within 2 business days for installation appointment once payment is done for submitted order.',
						},
					],
				},
				{
					title: 'Service',
					faqs: [
						{
							summary:
								'Is ATOM Broadband service available during power outage?',
							detail:
								"ATOM Broadband has a local power back up that guarantees that the service can be delivered during a power outage of up to 8 hours. (Getting power for router, that creates wifi, is customers' responsibility to enable wireless services to work)",
						},
						{
							summary:
								"How different is your fiber broadband from the wifi I'm using?",
							detail:
								'Very, ATOM Broadband has a dedicated speed only for you and you can connect a cable in your outlet/router to guarantee the best speed. In your own wifi you will also be able to decide the amount of users on your connection. The router is also much closer to you which is important as all walls and distance has a negative impact on the quality of the service.',
						},
						{
							summary:
								'As future proof, how does ATOM Broadband guarantee for high quality and service?',
							detail:
								'ATOM Broadband will be installed with a fiber connection that can handle speeds up to 1 Gigabit. This means that Quality and Speed guarantees ability for gaming, watching streamed TV/movies..',
						},
					],
				},
				{
					title: 'Subscription',
					faqs: [
						{
							summary:
								'Is ATOM Home Fiber Internet service is Prepaid or Postpaid subscription?',
							detail:
								'ATOM Home Fiber Internet service is Prepaid subscription for now.',
						},
						{
							summary:
								'In which kind of situation, my subscription will be suspended or terminated?',
							detail:
								"If you don't make bill payment till your pay due date, your subscription will be suspended. Your subscription will be terminated automatically if your subscription suspended period is 60 days long. And customer shall be responsible for returning the routers and equipment installed for ATOM Power Fiber in good working condition as at the date of installation.",
						},
						{
							summary:
								'What should I need to do if want to reactivate service back?',
							detail:
								'<p>Reactivation will be only available for the customer who are less than 60 days suspension period.</p><p>For reactivation request, there will two options.</p><p>Option 1: Please go to your profile page from this link Profile , choose your order ID and submit reactivation request.</p><p>Option 2: Please contact to ATOM Broadband Call Center and ask to make reactivation by providing your CustomerID.</p>',
						},
					],
				},
				{
					title: 'Billing & Payment',
					faqs: [
						{
							summary:
								'How long does it takes to reopen internet line for suspended customers after payment?',
							detail:
								'Your line will be reopened within 4 working hours in the same day.',
						},
					],
				},
				{
					title: 'Speed & Usage',
					faqs: [
						{
							summary: 'How is network stability?',
							detail:
								'The network is very stable and the speed to the router will always be the same, you can connect many users to the router but more users will affect the experience for each user.',
						},
						{
							summary: 'Is ATOM Fiber Internet service unlimited?',
							detail:
								'Yes, you may use as much data as you want but you are not allowed to share or resell the service.',
						},
						{
							summary: 'How much can surf with ATOM Broadband?',
							detail:
								'<p>�Can surf as much as you want�</p><ol><li>With ATOM Broadband you can surf as much as you like in the speed that you have chosen for your service.</li><li>All customers get a Wifi router that enables customers to do mobile surfing as well as fixed surfing using a cable to a computer or other device.</li></ol>',
						},
						{
							summary: 'Can several users simultaneously use?',
							detail:
								'Yes, ATOM Broadband services are offered in different speeds and different prices. For different price plans of services � will have different ability for number of people that can use service.',
						},
						{
							summary: 'Can customers upgrade or downgrade speed?',
							detail:
								'Customer can upgrade speed while renewing for next subscription and are allowed to downgrade speed only after 90 days.',
						},
						{
							summary:
								'Is there compensation if downtime is very long? What will you do for us when your network is down for a very long period?',
							detail:
								'If network is down for a long time (longer then a week) there will be a compensation for paying customer.',
						},
					],
				},
			],
		},
	},
}
