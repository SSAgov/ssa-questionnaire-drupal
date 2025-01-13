import styles from './Breadcrumbs.module.css';

export enum EBreadcrumbType {
  link = 'link',
  with_custom_click_handler = 'with_custom_click_handler',
  button = 'button',
}

export interface IBreadCrumb {
  text: string;
  type: EBreadcrumbType;
  link?: string;
  targetBlank?: boolean;
  cb?: () => void;
}

export interface IBreadcrumbsProps {
  breadcrumbs: IBreadCrumb[];
}

export interface ILinkProps {
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  target?: string;
  rel?: string;
  href?: string;
}

const ArrowLeftIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Arrow pointing left</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
      />
    </svg>
  );
};

export const Breadcrumbs: React.FC<{
  breadcrumbs: IBreadCrumb[];
}> = ({ breadcrumbs }) => {
  return (
    <div className={styles.Breadcrumbs}>
      {breadcrumbs.map((breadcrumb: IBreadCrumb, i: number) => {
        function handleCustomClick(
          e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        ) {
          e.preventDefault();
          breadcrumb.cb();
        }

        let linkProps: ILinkProps = {};
        if (breadcrumb.type === EBreadcrumbType.with_custom_click_handler) {
          linkProps.onClick = handleCustomClick;
          linkProps.href = '#';
        }

        if (breadcrumb.type === EBreadcrumbType.link) {
          if (breadcrumb.targetBlank) {
            linkProps.href = breadcrumb.link;
            linkProps.target = '_blank';
            linkProps.rel = 'noopener noreferrer';
          }
        }

        return (
          <a key={i} className={styles.backLink} {...linkProps}>
            <ArrowLeftIcon className={styles.arrowIcon} />
            <span className={styles.btnText}>{breadcrumb.text}</span>
          </a>
        );

        // return breadcrumb.type === EBreadcrumbType.button ? (
        //   <button key={i} className={styles.backBtn} onClick={breadcrumb.cb}>
        //     <ArrowLeftIcon className={styles.arrowIcon} />
        //     <span className={styles.btnText}> {breadcrumb.text}</span>
        //   </button>
        // ) : (
        //   <a
        //     key={i}
        //     className={styles.backLink}
        //     onClick={breadcrumb.cb}
        //     href={breadcrumb.link}
        //     target="_blank"
        //     rel="noopener noreferrer"
        //   >
        //     <ArrowLeftIcon className={styles.arrowIcon} />
        //     <span className={styles.btnText}>{breadcrumb.text}</span>
        //   </a>
        // );
      })}
    </div>
  );
};
