//该配置文件是用于配置网络其你去需要的uri地址
//集中管理，效率高
let prefix = "/api";

export default{
    //获取城市列表信息
    getCities: prefix + "/getCitiesInfo",
    //获取正在热映列表
    getNowPlaying: prefix + "/getNowPlayingFilmList",
    //获取即将上映列表
    getComingSoon: prefix + "/getComingSoonFilmList",
}