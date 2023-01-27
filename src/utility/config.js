import { BiBookBookmark, BiGitPullRequest } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import {
  AiOutlineStar,
  AiOutlinePlayCircle,
  AiFillCaretDown,
} from "react-icons/ai";
import { BiGitRepoForked, BiBookOpen } from "react-icons/bi";
import { BsCode } from "react-icons/bs";
import { VscIssues, VscProject } from "react-icons/vsc";
import { MdInsights, MdSecurity } from "react-icons/md";
import { TiTick } from "react-icons/ti";
export const headerConfig = {
  repo: {
    avatar: <BiBookBookmark />,
    title: "facebook",
    subRepo: "react",
    type: "public",
  },
  functionalities: [
    {
      type: "isFunction",
      title: "Notification",
      avatar: <IoIosNotificationsOutline />,
    },
    {
      type: "isClicked",
      title: "Star",
      avatar: <AiOutlineStar />,
      value: "175k",
    },
    {
      type: "isClicked",
      title: "Fork",
      avatar: <BiGitRepoForked />,
      value: "35.3k",
    },
  ],
  routes: [
    {
      type: "inActive",
      title: "Code",
      avatar: <BsCode />,
    },
    {
      type: "Active",
      title: "Issues",
      avatar: <VscIssues />,
    },
    {
      type: "inActive",
      title: "Pullrequests",
      avatar: <BiGitPullRequest />,
    },
    {
      type: "inActive",
      title: "Actions",
      avatar: <AiOutlinePlayCircle />,
    },
    {
      type: "inActive",
      title: "Projects",
      avatar: <VscProject />,
    },
    {
      type: "inActive",
      title: "Wiki",
      avatar: <BiBookOpen />,
    },
    {
      type: "inActive",
      title: "Security",
      avatar: <MdSecurity />,
    },
    {
      type: "inActive",
      title: "Insights",
      avatar: <MdInsights />,
    },
  ],
};

export const tableConfig = {
  statistics: [
    {
      type: "Open",
      title: "Open",
      avatar: <VscIssues />,
    },
    {
      type: "Closed",
      title: "Closed",
      avatar: <TiTick />,
    },
  ],
  accessibilty: [
    {
      type: "dropDown",
      title: "Author",
      avatar: <AiFillCaretDown />,
    },
    {
      type: "dropDown",
      title: "Label",
      avatar: <AiFillCaretDown />,
    },
    {
      type: "dropDown",
      title: "Projects",
      avatar: <AiFillCaretDown />,
    },
    {
      type: "dropDown",
      title: "Milestones",
      avatar: <AiFillCaretDown />,
    },
    {
      type: "dropDown",
      title: "Assignee",
      avatar: <AiFillCaretDown />,
    },
    {
      type: "dropDown",
      title: "Sort",
      avatar: <AiFillCaretDown />,
    },
  ],
};

export const footerConfig = {
  routes: [
    { title: "Terms" },
    { title: "Privacy" },
    { title: "Security  " },
    { title: "Status" },
    { title: "Docs" },
    { title: "Contact Github" },
    { title: "Pricing" },
    { title: "API" },
    { title: "Blog" },
    { title: "Training" },
    { title: "About" },
  ],
};
