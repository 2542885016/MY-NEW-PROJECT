export const countdown = () => {
    const now = new Date();
    const midnight = new Date();

    // 设置为明天的 0 点
    midnight.setHours(24, 0, 0, 0);

    const diff = midnight - now; // 毫秒差
    const totalSeconds = Math.floor(diff / 1000);

    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
};
