<template>
    <div class="profile-picture">
        <img src="../../assets/images/profile-picture.png" alt="User profile picture" />
        <div class="gradient">
            <p>Jane Doe</p>
            <a href="#">
                <img src="../../assets/icons/user-icon.svg" alt="User icon" />
            </a>
        </div>
    </div>
</template>

<script>

export default {
    name: "ProfilePicture"
}
</script>

<style lang="scss" scoped>
.profile-picture {
    position: relative;
    width: 100%;

    img {
        width: 100%;
    }

    .gradient {
        height: 67px;
        width: calc(100% - 40px);
        position: absolute;
        padding: 0 20px;
        bottom: 0;
        left: 0;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            #000000 70.31%
        );

        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;

        p {
            color: #fff;
        }
    }
}
</style>