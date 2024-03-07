<script setup lang="ts">
const { showModal, closeModal } = useModal()

const showComponent = reactive({
	all: false,
	mobile_banking: false,
	shop: false,
	atom_pay: false,
})
function toggleShowComponent(
	name: 'all' | 'mobile_banking' | 'shop' | 'atom_pay',
) {
	showComponent[name] = true
	Object.keys(showComponent)
		.filter((k) => k !== name)
		.forEach(
			(k) =>
				(showComponent[k as 'all' | 'mobile_banking' | 'shop' | 'atom_pay'] =
					false),
		)
}
</script>

<template>
	<article class="container pb-8">
		<section class="flex flex-col gap-10">
			<section class="breadcrumbs text-sm">
				<ul>
					<li>
						<NuxtLink to="/dashboard"> Settings </NuxtLink>
					</li>
					<li>
						<NuxtLink to="/dashboard/subscription">Subscription</NuxtLink>
					</li>
					<li>Checkout</li>
				</ul>
			</section>

			<section class="flex flex-col gap-4">
				<h1 class="text-title-section font-semibold">Check out</h1>

				<div>
					<p class="text-sm">Check Your Subscription Renew Information</p>

					<span class="divider mb-0 mt-2" />
				</div>
			</section>

			<section class="grid grid-cols-1 gap-10 lg:grid-cols-12">
				<!-- Product Plan & Payment method -->
				<div class="col-span-full flex flex-col gap-10 lg:col-span-7">
					<div class="flex flex-col gap-3">
						<div class="flex justify-between">
							<span class="text-sm font-semibold">Product</span>
							<span class="text-sm font-semibold">Subtotal ( Inc.tax )</span>
						</div>

						<div class="form-control gap-3">
							<DashboardSubscriptionPlan
								name="plan"
								productName="Power 100Mps ( 30D )"
							>
								<span class="text-xs lg:label-text"> 77500 MMK </span>
							</DashboardSubscriptionPlan>

							<DashboardSubscriptionPlan
								name="plan"
								productName="Power 50Mps ( 15D )"
							>
								<span class="text-xs lg:label-text"> 55000 MMK </span>
							</DashboardSubscriptionPlan>

							<DashboardSubscriptionPlan
								name="plan"
								productName="Power 50Mps ( 7D )"
							>
								<span class="text-xs lg:label-text"> 35000 MMK </span>
							</DashboardSubscriptionPlan>
						</div>
					</div>

					<div class="flex flex-col gap-3">
						<div class="flex justify-between">
							<span class="text-sm font-semibold">Payment method</span>
						</div>

						<div class="form-control gap-3">
							<DashboardPaymentMethod
								name="payment"
								:productName="
									$t('subscription.checkout.payment_method.choose_services')
								"
								@click="toggleShowComponent('all')"
								:show="showComponent.all"
							>
								<img src="/123-pay.svg" />
							</DashboardPaymentMethod>

							<DashboardPaymentMethod
								name="payment"
								:productName="
									$t('subscription.checkout.payment_method.mobile_banking')
								"
							>
							</DashboardPaymentMethod>

							<DashboardPaymentMethod
								name="payment"
								:productName="
									$t('subscription.checkout.payment_method.pay_at_shops')
								"
							>
							</DashboardPaymentMethod>

							<DashboardPaymentMethod
								name="payment"
								:productName="
									$t('subscription.checkout.payment_method.atom_pay')
								"
								@click="toggleShowComponent('atom_pay')"
								:show="showComponent.atom_pay"
							>
								<img src="/atom-pay.png" />
							</DashboardPaymentMethod>
						</div>
					</div>
				</div>

				<!-- Summary -->
				<div class="col-span-full lg:col-span-5">
					<div class="card gap-6 border px-6 py-10 shadow-xl">
						<h2 class="text-title-subsection font-semibold">Summary</h2>

						<ul class="flex flex-col gap-4">
							<li class="flex justify-between text-sm">
								<p class="font-normal">Device cost</p>
								<span class="font-medium">0 MMK</span>
							</li>

							<li class="flex justify-between text-sm">
								<p class="font-normal">Tax</p>
								<span class="font-medium">0 MMK</span>
							</li>

							<li class="flex justify-between text-sm">
								<p class="font-normal">Delivery fee</p>
								<span class="font-medium">0 MMK</span>
							</li>

							<li class="flex justify-between text-sm">
								<p class="font-normal">Subscription Cost</p>
								<span class="font-medium">55000 MMK</span>
							</li>

							<span class="divider" />

							<li class="flex justify-between">
								<p>Total</p>
								<span>55000 MMK</span>
							</li>
						</ul>

						<DashboardActionButton
							btnText="Pay now"
							class="!h-fit rounded-full bg-interactive-accent py-4 text-white hover:bg-interactive-accent-hover"
							@click="() => showModal('payment-id')"
						/>
					</div>
				</div>
			</section>
		</section>

		<!-- Payment Alert Modal -->
		<ModalRoot id="payment-id">
			<div class="flex flex-col items-center justify-center gap-6 py-14">
				<Icon name="check-circle" size="72px" class="text-flag-green" />

				<h3 class="text-title-body font-semibold">Thank You</h3>

				<span>Your purchase has been successfully completed.</span>

				<DashboardActionButton
					btnText="OK"
					class="inline-block !h-fit rounded-full bg-interactive-accent !px-12 py-3 text-white hover:bg-interactive-accent-hover"
					@click="() => closeModal('payment-id')"
				/>
			</div>
		</ModalRoot>
	</article>
</template>
