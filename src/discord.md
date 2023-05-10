自動的にリダイレクトされます。しばらくお待ちください。

<script setup>
import { useRoute, useRouter } from 'vitepress';
const router = useRouter();
if (typeof window !== 'undefined' && window.dataLayer) {
  window.dataLayer.push("event", "click_join_link", {
    event_category: "engagement",
  });
}
window.location.href = "https://discord.gg/cSvGt2uuMf";
</script>