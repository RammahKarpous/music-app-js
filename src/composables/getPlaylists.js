import { ref } from 'vue';

const getPlaylists = () => {
    const playlists = ref([]);
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch('http://localhost:3000/playlists')

            if (!data.ok) {
                throw Error('No data available')
            }

            playlists.value = await data.json();
        } catch (err) {
            error.value = err.message
            console.log(error.value);
        }
    }

    return { playlists, error, load }
}

export default getPlaylists