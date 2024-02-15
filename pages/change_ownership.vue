<script setup lang="ts">
import IMEI from '~/components/Ownership/ImeiForm.vue'
import Phone from '~/components/Ownership/PhoneForm.vue'
import ID from '~/components/Ownership/IdForm.vue'
import Confirm from '~/components/Ownership/Confirm.vue'

const active = ref(0)
const components = [IMEI, Phone, ID, Confirm]

const handleContinue = () => {
	if (active.value >= 3) {
		active.value = 0
		return
	}
	active.value += 1
}
</script>

<template>
	<div class="container mx-auto my-6">
		<div
			class="mx-auto w-1/2 rounded-xl pt-3 shadow-[0_20px_66px_0_rgba(34,48,73,0.2)]"
		>
			<ul class="steps w-full">
				<li
					data-content=""
					:class="[
						active > 0
							? 'after:bg-gradient-to-r after:from-indigo-300 after:to-indigo-400'
							: 'after:bg-indigo-600',
						{ 'show-dot': active === 0 },
						'step',
					]"
				>
					<span class="text-sm font-medium text-content-secondary"
						>Check IMEI</span
					>
				</li>
				<li
					data-content=""
					:class="[
						active >= 1
							? 'before:bg-gradient-to-r before:from-indigo-400 before:to-indigo-500 after:bg-indigo-500 after:bg-gradient-to-r after:from-indigo-500 after:to-indigo-500'
							: ':before:bg-gray after:bg-gray',
						{ 'show-dot': active === 1 },
						'step',
					]"
				>
					<span class="text-sm font-medium text-content-secondary">Phone</span>
				</li>
				<li
					data-content=""
					:class="[
						active >= 2
							? 'before:bg-gradient-to-r before:from-indigo-500 before:to-indigo-700 after:bg-indigo-600 after:bg-gradient-to-r after:from-indigo-600 after:to-indigo-600'
							: ':before:bg-gray after:bg-gray',
						{ 'show-dot': active === 2 },
						'step',
					]"
				>
					<span class="text-sm font-medium text-content-secondary">Upload</span>
				</li>
				<li
					data-content=""
					:class="[
						active >= 3
							? 'before:bg-gradient-to-r before:from-indigo-700 before:to-indigo-800 after:bg-indigo-700 after:bg-gradient-to-r after:from-indigo-700 after:to-indigo-700'
							: ':before:bg-gray after:bg-gray',
						{ 'show-dot': active === 3 },
						'step',
					]"
				>
					<span class="text-sm font-medium text-content-secondary"
						>Confirm</span
					>
				</li>
			</ul>
			<div class="my-4 px-8 py-4">
				<component :is="components[active]" :onContinue="handleContinue" />
			</div>
		</div>

		<div class="mx-auto w-1/3 space-y-6 pt-6 text-sm text-content-secondary">
			<p class="flex items-center gap-2">
				<Icon name="exclamation-circle" />
				<span>ATOM စက်ပိုင်ရှင် ပြောင်းလဲနည်း</span>
			</p>
			<div class="flex flex-col gap-2">
				<p>အဆင့် ၁။</p>
				<p>စက်၏ IMEI နံပါတ်ကို ရိုက်ထည့်ပါ။</p>
			</div>
			<div class="flex flex-col gap-2">
				<p>အဆင့် ၂။</p>
				<p>
					လိုအပ်သောအချက်အလက်များကို ဖြည့်ပြီး မှတ်ပုံတင် (သို့) ပတ်စပို့ကို
					တင်ပါ။
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<p>အဆင့် ၃။</p>
				<p>တောင်းဆိုချက်ကိုပြန်လည်ပေးပို့ပါ။</p>
			</div>
			<div class="flex flex-col gap-2">
				<p>အဆင့် ၄။</p>
				<p>၇ ရက်အတွင်း ပြန်လည်အကြောင်းကြားပေးမည် ဖြစ်ပါသည်။</p>
			</div>

			<img src="/imei-sample.png" alt="" />

			<YoutubePlayer
				:autoplay="false"
				src="https://www.youtube.com/embed/jxGGJD5u70o?list=PLbxseraalAOb6r1vXdCLhQ9Wq5-q2Vr1c"
			/>
		</div>
	</div>
</template>

<style scoped>
.steps {
	.step {
		&::after {
			height: 0.1rem;
			width: 0.1rem;
		}
		&::before {
			height: 0.1rem;
		}
	}
	.step.show-dot {
		&::after {
			height: 0.5rem;
			width: 0.5rem;
			background-color: indigo;
		}
		&::before {
			background-color: indigo;
		}
	}
}
</style>
