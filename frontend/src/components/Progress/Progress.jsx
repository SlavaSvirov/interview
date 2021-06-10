import { Progress } from 'antd';

function ProgressBar({ currentUserReview }) {

  const progressValue = (key) => {
    switch (key) {
      case 0:
        return 5

      case 1:
        return 10

      case 2:
        return 20

      case 3:
        return 30

      case 4:
        return 40

      case 5:
        return 50

      case 6:
        return 60

      case 7:
        return 70

      case 8:
        return 80

      case 9:
        return 90

      default:
        return 100
    }
  }

  return (
    <div className='progress' style={{position: 'absolute', zIndex: '-1'}}>
      <Progress
        type="circle"
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068',
        }}
        width='280px'
        percent={progressValue(currentUserReview.length)}
      />
    </div>
  )
}

export default ProgressBar
