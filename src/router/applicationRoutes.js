import FontExample from '../example/FontExample';
import ErrorThrowScreen from '../example/ErrorThrowScreen';
import withErrorBoundary from '../common/withErrorBoundary';
import ErrorDisplayScreen from '../example/ErrorDisplayScreen';
import ExceptionCaptureScreen from '../example/ExceptionCaptureScreen';

export default [
  {
    path: '/',
    exact: true,
    title: 'Home',
    iconName: 'home',
    component: withErrorBoundary(FontExample, ErrorDisplayScreen),
  },
  {
    path: '/errors',
    title: 'Error',
    iconName: 'warning',
    component: withErrorBoundary(ErrorThrowScreen, ErrorDisplayScreen),
  },
  {
    path: '/throw',
    title: 'Exception',
    iconName: 'bug-report',
    component: ExceptionCaptureScreen,
  },
];
