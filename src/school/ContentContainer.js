import React, { useEffect, useState } from "react";
import ContentComponent from "./ContentComponent";
import { SchoolContentWrapper } from "./StyledSchool";
import { getSpecificEBSUrl } from "./school-function";
import constants from "./constants.json";

const ContentContainer = ({ userObj }) => {
  const [onlineClassURL, setOnlineClassURL] = useState(null);

  useEffect(() => {
    if (!userObj) setOnlineClassURL(constants.INITIAL_EBS_URL);
    else getSpecificEBSUrl(userObj).then((variable) => setOnlineClassURL(variable));
  }, [userObj]);

  return (
    <SchoolContentWrapper>
      <ContentComponent
        imagePath={constants.DK_IMAGE_PATH}
        label={constants.GO_TO_DK}
        link={constants.DK_URL}
      />
      <ContentComponent
        imagePath={constants.DIAGNOSIS_IMAGE_PATH}
        label={constants.GO_TO_DIAGNOSIS}
        link={constants.DIAGNOSIS_URL}
      />
      <ContentComponent
        imagePath={constants.EBS_IMAGE_PATH}
        label={constants.GO_TO_EBS}
        link={onlineClassURL}
      />
    </SchoolContentWrapper>
  );
};

export default ContentContainer;
