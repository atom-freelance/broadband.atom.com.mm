<template>
	<div class="container grid min-h-fit grid-cols-12 gap-0 py-4 lg:gap-4">
		<div class="col-span-6 lg:col-span-3">
			<SidebarList>
				<li>
					<SidebarItem
						to="/dashboard/profile"
						name="Profile"
						icon-name="user-circle"
						enableLeftSideBorder
					/>
				</li>
				<li>
					<SidebarItem
						to="/dashboard/subscription"
						name="Subscription"
						icon-name="receipt-text"
						enableLeftSideBorder
					/>
				</li>
				<li>
					<SidebarItem
						to="/dashboard/order"
						name="Order"
						icon-name="truck"
						enableLeftSideBorder
					/>
				</li>
				<li>
					<SidebarItem
						to="/dashboard/billing"
						name="Billing"
						icon-name="dollar-circle"
						enableLeftSideBorder
					/>
				</li>
				<li>
					<SidebarItem
						to="/dashboard/relocate"
						name="Relocate"
						icon-name="home-activity"
						enableLeftSideBorder
					/>
				</li>
				<li>
					<SidebarItem
						to="/dashboard/term-and-condition"
						name="T&C acceptance"
						icon-name="badge-check"
						enableLeftSideBorder
					/>
				</li>
				<li>
					<SidebarItem
						to="/dashboard/mobile-bundle"
						name="Mobile bundle"
						icon-name="mobile"
						enableLeftSideBorder
					/>
				</li>
			</SidebarList>
		</div>
		<div class="col-span-6 min-h-[500px] p-10 pl-0 lg:col-span-9">
			<slot />
		</div>
	</div>
</template>
