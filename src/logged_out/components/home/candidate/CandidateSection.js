import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import FeatureSection from "./FeatureSection";

function CandidateSection(props) {
  const { selectCandidate } = props;
  useEffect(() => {
    selectCandidate();
  }, [selectCandidate]);
  return (
    <Fragment>
    Hi
      <HeadSection />
      <FeatureSection />
    </Fragment>
  );
}

CandidateSection.propTypes = {
  selectCandidate: PropTypes.func.isRequired,
};

export default CandidateSection;