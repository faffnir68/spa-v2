import { ref, onMounted, watch, watchEffect, isRef } from 'vue'

export default function useFetch(url) {

    const data = ref(null)
    const errorMsg = ref(null)
    const loading = ref('idle')

    const load = async (urlValue) => {
        try {
            loading.value = "loading"
            const response = await fetch(urlValue)
            if (!response.ok) throw new Error(`HTTP ${response.status}`)
            data.value = await response.json()
        }
        catch(error) {
            errorMsg.value = error.message
        }
        finally {
            loading.value = "done"
        }
    }

    if(isRef(url)) {
        watch(url, (newUrl) => {
            if(newUrl) load(newUrl)
        }, { immediate: true })
    } else {
        load(url)
    }


    return { data, loading, error: errorMsg }
}