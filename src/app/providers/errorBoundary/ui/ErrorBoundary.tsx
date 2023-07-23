import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { withTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

interface Props {
  children: ReactNode | ReactNode[];
}

interface StateProps {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, StateProps> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  reloadPage() {
    location.reload();
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <h1>
          {/* <Suspense fallback={<div>Loading...</div>}> */}
            <Button onClick={this.reloadPage}>Reload page</Button>
          {/* </Suspense> */}
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
