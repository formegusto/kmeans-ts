const Errors: { [key: string]: Error } = {
  NotSettingInitCentroids: new Error("초기 중심점이 설정되지 않았습니다."),
  EmptyRequiredParameters: new Error("필수 매개 변수가 제공되지 않았습니다."),
};

export default Errors;
