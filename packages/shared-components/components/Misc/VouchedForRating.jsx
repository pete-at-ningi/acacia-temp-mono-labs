import React from 'react';
import styled from 'styled-components';

const VouchedForRatingWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const VouchedForRatingWidget = ({ firmID }) => {
  return (
    <VouchedForRatingWrapper>
      <div className='vf-prof-review'>
        <script
          src='https://api.vouchedfor.co.uk/v0/public/widget/firm-rating?version=vf2023'
          async
        ></script>
        <div className={`vf-firm-${firmID}`}>
          <div
            dangerouslySetInnerHTML={{
              __html: `
                <script type="text/javascript">
                  setTimeout(function() {
                    contentLoaded(window, function(e) {
                      vf_get_ratings("MjQxOA==", "vf-firm-${firmID}");
                    });
                  }, 1500);
                </script>
              `,
            }}
          />
        </div>
      </div>
    </VouchedForRatingWrapper>
  );
};

export default VouchedForRatingWidget;
