const Errors: { [key: string]: Error } = {
  NotSettingInitCentroids: new Error("초기 중심점이 설정되지 않았습니다."),
};

export default Errors;
