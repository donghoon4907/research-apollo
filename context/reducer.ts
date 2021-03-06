/**
 * * 로컬 상태 관리 모듈
 *
 * @author frisk;
 * @param state {*} 초기 상태
 * @param action {*} 액션
 */
export default function reducer(state: any, action: any) {
  switch (action.type) {
    case "SET_ME":
      return {
        ...state,
        id: action.id,
        nickname: action.nickname,
        email: action.email,
        avatar: action.avatar,
        isMaster: action.isMaster
      };
    case "SHOW_NOTICE_MODAL":
      return {
        ...state,
        isShowNoticeModal: true,
        activeNotice: {
          id: action.id,
          action: action.action,
          actionText: action.actionText,
          title: action.title,
          description: action.description
        }
      };
    case "HIDE_NOTICE_MODAL":
      return {
        ...state,
        isShowNoticeModal: false,
        activeNotice: {
          id: "",
          action: "wait",
          actionText: "비활성화",
          title: "",
          description: ""
        }
      };

    case "SHOW_SEARCH_BAR":
      return {
        ...state,
        isShowSearchBar: true
      };
    case "HIDE_SEARCH_BAR":
      return {
        ...state,
        isShowSearchBar: false
      };
    case "SHOW_FILTER_BAR":
      return {
        ...state,
        isShowFilterBar: true
      };
    case "HIDE_FILTER_BAR":
      return {
        ...state,
        isShowFilterBar: false
      };
    case "SHOW_LOGIN_MODAL":
      return {
        ...state,
        isShowLoginModal: true
      };
    case "HIDE_LOGIN_MODAL":
      return {
        ...state,
        isShowLoginModal: false
      };
    case "SEARCH_POST":
      return {
        ...state,
        searchPostOption: {
          orderBy: action.hasOwnProperty("orderBy")
            ? action.orderBy
            : state.searchPostOption.orderBy,
          query: action.hasOwnProperty("query")
            ? action.query
            : state.searchPostOption.query,
          filter: action.hasOwnProperty("filter")
            ? action.filter
            : state.searchPostOption.filter
        }
      };
    case "EXPAND_NAVIGATION":
      return {
        ...state,
        isCollapseNav: "expand"
      };
    case "CONTRACT_NAVIGATION":
      return {
        ...state,
        isCollapseNav: "contract"
      };
    default:
      return { ...state };
  }
}
