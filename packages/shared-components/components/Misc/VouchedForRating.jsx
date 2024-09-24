import React from 'react';
import styled from 'styled-components';

const VouchedForRatingWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const VouchedForRatingWidget = () => {
  return (
    <VouchedForRatingWrapper>
      <div className='vf-prof-review'>
        <script
          src='https://api.vouchedfor.co.uk/v0/public/widget/firm-rating?version=vf2023'
          async
        ></script>
        <div className='vf-firm-2418'>
          <a
            href='https://www.vouchedfor.co.uk/firm/2418'
            title='Jackson Hodge Wealth profile'
          >
            <img
              src='https://assets.vouchedfor.co.uk/widgets/ratings-and-reviews/legacy-version/img/ajax-loader.gif'
              style={{ paddingTop: '20px' }}
              alt='Jackson Hodge Wealth profile'
            />
          </a>
          <div
            dangerouslySetInnerHTML={{
              __html: `
                <script type="text/javascript">
                  setTimeout(function() {
                    contentLoaded(window, function(e) {
                      vf_get_ratings("MjQxOA==", "vf-firm-2418");
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
