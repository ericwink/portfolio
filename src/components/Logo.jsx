import { motion } from 'framer-motion'

const stroke = {
    hidden: { pathLength: 0 },
    visible: {
        pathLength: 1,

        transition: { duration: 4, delay: 1, ease: 'easeInOut' }
    }
}

const fill = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1, delay: 3 }
    }
}

const Logo = () => {
    return (
        <svg width="284" height="275" viewBox="0 0 84 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
                variants={stroke}
                initial='hidden'
                animate='visible'
                stroke='white'
                d="M57.8981 13.3131L57.8836 13.3133L57.8692 13.3144C57.3263 13.3544 56.8114 13.5706 56.4026 13.93C56.0002 14.2837 55.7223 14.7572 55.6095 15.2805L53.3811 22.5H46.6189L44.3838 15.2585L44.3825 15.2545C44.2217 14.7488 43.9042 14.3074 43.4759 13.9941C43.0476 13.6808 42.5307 13.5119 42 13.5119C41.4693 13.5119 40.9524 13.6808 40.5241 13.9941C40.0958 14.3074 39.7783 14.7488 39.6175 15.2545L39.6162 15.2585L37.3811 22.5H30.6189L28.3852 15.2633C28.2215 14.6951 27.8617 14.2032 27.3695 13.8751C26.8757 13.546 26.2811 13.4033 25.6918 13.4724L25.6918 13.4724L25.688 13.4729C25.3236 13.5184 24.9737 13.6437 24.6633 13.8398C24.3528 14.0359 24.0893 14.2979 23.8916 14.6074C23.6939 14.9168 23.5667 15.266 23.5192 15.6301C23.4718 15.9931 23.5048 16.3622 23.6157 16.7111L25.3871 22.5H24.813H24.8013L24.7896 22.5005C23.467 22.5624 22.3446 23.7933 22.4065 25.1174L22.4065 25.1174C22.4683 26.4358 23.6926 27.5555 25.0112 27.5H26.9408L27.5455 29.5H26.813H26.8013L26.7896 29.5005C25.467 29.5624 24.3446 30.7933 24.4065 32.1174L24.906 32.094L24.4065 32.1174C24.4683 33.4358 25.6926 34.5555 27.0112 34.5H29.0993L31.6149 42.7095L31.6165 42.7145C31.7773 43.2202 32.0948 43.6617 32.5231 43.9749C32.9514 44.2882 33.4683 44.4571 33.999 44.4571C34.5297 44.4571 35.0466 44.2882 35.4749 43.9749C35.9032 43.6616 36.2207 43.2202 36.3815 42.7145L36.383 42.7095L38.8997 34.5H45.0993L47.6159 42.7096L47.6175 42.7145C47.7783 43.2202 48.0958 43.6616 48.5241 43.9749C48.9524 44.2882 49.4693 44.4571 50 44.4571C50.5307 44.4571 51.0476 44.2882 51.4759 43.9749C51.9042 43.6616 52.2217 43.2202 52.3825 42.7145L52.384 42.7095L54.9007 34.5H56.9966C58.3303 34.5167 59.531 33.3354 59.531 32C59.531 30.6646 58.3303 29.4833 56.9966 29.5H56.4543L57.0583 27.5H58.9966C60.3303 27.5167 61.531 26.3354 61.531 25C61.531 23.6646 60.3303 22.4833 58.9966 22.5H58.6128L60.378 16.7293C60.5287 16.3475 60.5832 15.9345 60.5364 15.5265C60.4887 15.1108 60.3375 14.7137 60.0965 14.3716C59.8556 14.0295 59.5326 13.7534 59.1573 13.5685C58.7862 13.3858 58.3757 13.298 57.9625 13.3129C57.941 13.3127 57.9196 13.3127 57.8981 13.3131ZM29.094 73.5H29.0823L29.0706 73.5005C28.302 73.5366 27.5355 72.8403 27.4995 72.0706C27.4636 71.3035 28.1553 70.5426 28.9188 70.5L54.969 70.5001L54.9761 70.4999C55.3483 70.4946 55.732 70.6635 56.0285 70.9549C56.3249 71.2463 56.5 71.6267 56.5 72C56.5 72.3733 56.3249 72.7537 56.0285 73.0451C55.732 73.3365 55.3483 73.5054 54.9761 73.5H54.969H29.094ZM0.5 4C0.5 2.06014 2.06014 0.5 4 0.5H80C81.9399 0.5 83.5 2.06014 83.5 4V54C83.5 55.9399 81.9399 57.5 80 57.5H4C2.06014 57.5 0.5 55.9399 0.5 54V4ZM32.7737 29.5L32.149 27.5H35.851L35.2263 29.5H32.7737ZM43.5455 29.5H40.4543L41.0583 27.5H42.9408L43.5455 29.5ZM48.7737 29.5L48.149 27.5H51.851L51.2263 29.5H48.7737ZM48.5 67.5H35.5V60.5H48.5V67.5Z" />

            <motion.path
                variants={fill}
                initial='hidden'
                animate='visible'
                fill='white'
                d="M4 0C1.784 0 0 1.784 0 4V54C0 56.216 1.784 58 4 58H80C82.216 58 84 56.216 84 54V4C84 1.784 82.216 0 80 0H4ZM57.906 13.813C57.927 13.8127 57.948 13.8127 57.969 13.813C58.3034 13.799 58.6361 13.8692 58.9363 14.0171C59.2366 14.165 59.495 14.3859 59.6878 14.6595C59.8805 14.9332 60.0015 15.2509 60.0396 15.5834C60.0778 15.916 60.0318 16.2528 59.906 16.563L57.937 23H59C60.057 22.985 61.031 23.943 61.031 25C61.031 26.057 60.057 27.015 59 27H56.687L55.781 30H57C58.057 29.985 59.031 30.943 59.031 32C59.031 33.057 58.057 34.015 57 34H54.531L51.906 42.563C51.7774 42.9676 51.5234 43.3207 51.1807 43.5714C50.838 43.822 50.4245 43.9571 50 43.9571C49.5755 43.9571 49.162 43.822 48.8193 43.5714C48.4766 43.3207 48.2226 42.9676 48.094 42.563L45.469 34H38.53L35.905 42.563C35.7764 42.9676 35.5224 43.3207 35.1797 43.5714C34.837 43.822 34.4235 43.9571 33.999 43.9571C33.5745 43.9571 33.161 43.822 32.8183 43.5714C32.4756 43.3207 32.2216 42.9676 32.093 42.563L29.469 34H27C25.953 34.05 24.955 33.141 24.906 32.094C24.857 31.046 25.766 30.049 26.813 30H28.219L27.312 27H25C23.953 27.05 22.955 26.141 22.906 25.094C22.857 24.046 23.766 23.049 24.813 23H26.063L24.093 16.562C24.0036 16.2822 23.977 15.9861 24.015 15.6948C24.053 15.4035 24.1547 15.1241 24.3129 14.8766C24.4711 14.6291 24.6819 14.4194 24.9302 14.2625C25.1786 14.1057 25.4585 14.0055 25.75 13.969C26.2214 13.9137 26.6972 14.0279 27.0922 14.2912C27.4871 14.5544 27.7756 14.9496 27.906 15.406L30.25 23H37.75L40.094 15.406C40.2226 15.0014 40.4766 14.6483 40.8193 14.3976C41.162 14.147 41.5755 14.0119 42 14.0119C42.4245 14.0119 42.838 14.147 43.1807 14.3976C43.5234 14.6483 43.7774 15.0014 43.906 15.406L46.25 23H53.75L56.094 15.406C56.1814 14.9794 56.4057 14.593 56.7327 14.3055C57.0598 14.018 57.4717 13.8451 57.906 13.813ZM42 22.75L41.937 23H42.063L42 22.75ZM31.469 27L32.406 30H35.594L36.531 27H31.469ZM40.687 27L39.781 30H44.219L43.312 27H40.687ZM47.469 27L48.406 30H51.594L52.531 27H47.469ZM33.625 34L34 35.219L34.375 34H33.625ZM49.625 34L50 35.219L50.375 34H49.625ZM35 60V68H49V60H35ZM28.906 70C27.863 70.049 26.951 71.047 27 72.094C27.049 73.14 28.05 74.049 29.094 74H54.969C56.021 74.015 57 73.056 57 72C57 70.944 56.021 69.985 54.969 70H28.906Z" />
        </svg>
    )
}

export default Logo