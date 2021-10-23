import { styled } from "@material-ui/core/styles";
import { Avatar, Box } from "@material-ui/core";

// 프로필 아이콘 글자 한글일때 구분
export const check_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

// time
export function timeForToday(time) {
  const now = new Date();
  const created_at = new Date(time);

  const minute = Math.floor((now.getTime() - created_at.getTime()) / 1000 / 60);
  if (minute < 1) return "방금전";
  if (minute < 60) {
    return `${minute}분전`;
  }

  const hour = Math.floor(minute / 60);
  if (hour < 24) {
    return `${hour}시간전`;
  }

  const day = Math.floor(minute / 60 / 24);
  if (day < 365) {
    return `${day}일전`;
  }

  return `${Math.floor(day / 365)}년전`;
}

// style

// export const Item = styled(Box)(({ theme }) => ({
//   ...theme.typography.body2,
//   paddingTop: theme.spacing(1),
//   paddingBottom: theme.spacing(1),
//   textAlign: "center",
//   color: "#737373",
//   fontSize: "1rem",
//   lineHeight: "1rem"
// }));

// export const ProfileIcon = styled(Avatar)(() => ({
//   backgroundColor: "orangered",
//   width: "2rem",
//   height: "2rem"
// }));
