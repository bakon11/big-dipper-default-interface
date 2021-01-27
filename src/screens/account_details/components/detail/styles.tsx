import {
  makeStyles, createStyles,
} from '@material-ui/styles';
import { getMinMediaQuery } from '@styles';

export const useGetStyles = (props: any) => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      padding: theme?.palette?.custom?.margins?.small,
      background: theme?.palette?.background?.paper,
      '&.userInfoMobile': {
        padding: '0',
      },
      '&.userInfoDesktop': {
        display: 'none',
      },
      [getMinMediaQuery(theme?.breakpoints?.values?.tablet)]: {
        '&.userInfoDesktop': {
          background: theme?.palette?.background?.paper,
          padding: theme?.palette?.custom?.margins?.large,
          display: 'block',
          '& .dataContent': {
            marginRight: '5rem',
          },
          '& hr': {
            background: theme?.palette?.divider,
          },
        },
        '&.userInfoMobile': {
          display: 'none',
        },
      },
    },
    address: {
      '&.userInfoAddress': {
        '& h4': {
          color: theme?.palette?.custom?.fonts.fontOne,
        },
        '& .addressDisplay': {
          color: theme?.palette?.custom?.fonts.fontTwo,
          '& .copy-icon': {
            color: theme?.palette?.custom?.fonts.fontTwo,
          },
        },
        '& .rewardAddress': {
          '& .question-icon': {
            color: theme?.palette?.custom?.fonts.fontTwo,
          },
        },
      },

    },
    table: {
      '& .userInfoTable': {
        '& .MuiTab-root': {
          color: theme?.palette?.custom?.fonts?.fontThree,
        },
        '& .tab': {
          '& .MuiTab-textColorPrimary.Mui-selected': {
            color: theme?.palette?.type === 'light' ? '#FD3B4C' : theme?.palette?.custom?.fonts?.fontOne,
          },
          '& .indicator': {
            backgroundColor: theme?.palette?.type === 'light' ? '#FD3B4C' : theme?.palette?.custom?.fonts?.fontOne,
          },
        },
        '& .MuiTablePagination-caption, & .label, & .cell': {
          color: theme.palette.custom.fonts.fontTwo,
        },
        '& .MuiIconButton-root, & .pagination-actions__page': {
          background: theme?.palette?.custom?.table?.rowOdd,
          color: theme.palette.custom.fonts.fontThree,
        },
        '& .table__label': {
          color: theme?.palette?.custom?.fonts?.fontOneToTwo,
        },
        '& .table__cell': {
          color: theme?.palette?.custom?.fonts?.fontTwo,
        },
        '& .table__row': {
          '&:nth-of-type(odd)': {
            background: theme?.palette?.type === 'light' ? '#F8F8F8' : '#19191D',
          },
        },
      },
    },
    chart: {
      '&.userInfoChart': {
        '& h3, & h1': {
          color: theme?.palette?.custom?.fonts.fontOne,
        },
        '& h2, & h4': {
          color: theme?.palette?.custom?.fonts.fontTwo,
        },
        '& .dataName': {
          color: theme?.palette?.custom?.fonts.fontTwo,
        },
        '& .dataAmount': {
          color: theme?.palette?.custom?.fonts.fontOne,
        },
        '& .dataType': {
          '&.available': {
            '&:before': {
              background: theme?.palette?.type === 'light' ? props.chart.colors[0] : `${props.chart.colors[0]}b3`,
            },
          },
          '&.delegate': {
            '&:before': {
              background: props.chart.colors[1],
            },
          },
          '&.unbonding': {
            '&:before': {
              background: theme?.palette?.type === 'light' ? props.chart.colors[2] : `${props.chart.colors[2]}b3`,
            },
          },
          '&.reward': {
            '&:before': {
              background: theme?.palette?.type === 'light' ? props.chart.colors[3] : `${props.chart.colors[3]}b3`,
            },
          },
          '&.commision': {
            '&:before': {
              background: theme?.palette?.type === 'light' ? props.chart.colors[4] : `${props.chart.colors[4]}b3`,
            },
          },
        },
      },

    },
  }));

  return {
    classes: useStyles(),
  };
};