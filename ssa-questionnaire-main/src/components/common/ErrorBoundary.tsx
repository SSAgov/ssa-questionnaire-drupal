import { EAlertType, EButtonVariant } from '@/interfaces';
import React, { ErrorInfo } from 'react';
import { Button } from './Actions';
import { Alert, EAlertVariant } from './Alert';

interface IProps {
  children: JSX.Element;
}

interface IState {
  hasError: boolean;
  errorName: string;
  errorMessage: string;
  errorStack: string;
  errorInfo: string;
  errorExpanded: boolean;
}

export class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: '',
      errorName: '',
      errorStack: '',
      errorInfo: '',
      errorExpanded: false,
    };
  }

  static getDerivedStateFromError(_: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(`error caught = `, error, errorInfo);
    this.setState({
      errorMessage: error.message,
      errorName: error.name,
      errorStack: error.stack,
      errorInfo: errorInfo.componentStack,
    });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="App">
          {/* {siteAlerts()} */}
          <div className={`steps-container`}>
            <div style={{ margin: '20px' }}>
              <Alert
                variant={EAlertVariant.default}
                type={EAlertType.error}
                title="Sorry, something went wrong"
                alertJsx={
                  <div>
                    <p style={{ marginRight: '15px' }}>
                      Please, reload this page and try again{' '}
                      <span
                        style={{
                          cursor: 'pointer',
                          color: '#005ea2',
                          marginLeft: '4px',
                        }}
                        onClick={() =>
                          this.setState((prevState) => ({
                            ...prevState,
                            errorExpanded: !prevState.errorExpanded,
                          }))
                        }
                      >
                        {this.state.errorExpanded ? '-' : '+'}
                      </span>
                    </p>
                    <div
                      style={{
                        display: this.state.errorExpanded ? 'block' : 'none',
                      }}
                    >
                      <p style={{ fontSize: '8px' }}>{this.state.errorName}</p>
                      <p style={{ fontSize: '8px' }}>{this.state.errorMessage}</p>
                      <p style={{ fontSize: '8px' }}>{this.state.errorStack}</p>
                      <p style={{ fontSize: '8px' }}>{this.state.errorInfo}</p>
                    </div>

                    <Button
                      variant={EButtonVariant.primary}
                      onClick={() => window.location.reload()}
                    >
                      Reload
                    </Button>
                  </div>
                }
              />
            </div>
          </div>
          {/* {currentStepContent && currentStepContent.type === 'page' ? <ReturnToTop /> : null} */}
        </div>
      );
    }

    return this.props.children;
  }
}
