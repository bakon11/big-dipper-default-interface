import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  Layout,
  HeaderBar,
  DataBlocksHeader,
} from '@components';
import { useValidatorDetailsHook } from './hooks';
import { useGetStyles } from './styles';

const BlockDetails = () => {
  const { t } = useTranslation(['blocks', 'common']);
  const { handleSearchbarSubmit } = useValidatorDetailsHook();
  const { classes } = useGetStyles();
  return (
    <Layout
      header={(
        <HeaderBar title={t('subTitle')} />
      )}
      searchBar={{
        searchBarPlaceholder: t('common:searchbar'),
        searchBarCallback: handleSearchbarSubmit,
      }}
    >
      {/* ===================================== */}
      {/* content start */}
      {/* ===================================== */}
      <div className={classnames(classes.root)}>
        <div className={classnames('data-blocks')}>
          <DataBlocksHeader />
        </div>
        <div className={classnames('mobile-tablet-header')}>
          mobile tablet header
        </div>
        <div className={classnames('block-details')}>
          block details
        </div>
        <div className={classnames('block-activities')}>
          block activities
        </div>
      </div>
      {/* ===================================== */}
      {/* content end */}
      {/* ===================================== */}
    </Layout>

  );
};

export default BlockDetails;