<template>
	<div class="container grid min-h-fit grid-cols-12 gap-0 lg:gap-4">
		<div class="col-span-6 lg:col-span-3">
			<ul class="flex flex-col items-start gap-10 p-4 text-content-secondary">
				<li>
					<SidebarItem
						to="/dashboard/profile"
						name="Profile"
						icon-name="user-circle"
					/>
				</li>
				<li>
					<SidebarItem
						to="/dashboard/subscription"
						name="Subscription"
						icon-name="receipt-text"
					/>
				</li>
				<li>
					<SidebarItem to="/dashboard/order" name="Order" icon-name="truck" />
				</li>
				<li>
					<SidebarItem
						to="/dashboard/billing"
						name="Billing"
						icon-name="dollar-circle"
					/>
				</li>
				<li>
					<SidebarItem
						to="/dashboard/relocate"
						name="Relocate"
						icon-name="home-activity"
					/>
				</li>
				<li>
					<SidebarItem
						to="/dashboard/term-and-condition"
						name="T&C acceptance"
						icon-name="badge-check"
					/>
				</li>
				<li>
					<SidebarItem
						to="/dashboard/mobile-bundle"
						name="Mobile bundle"
						icon-name="mobile"
					/>
				</li>
			</ul>
		</div>
		<div class="col-span-6 p-10 pl-0 lg:col-span-9">
			<slot />
		</div>
	</div>
</template>
