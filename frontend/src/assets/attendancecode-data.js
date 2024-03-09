export const attendanceCodeData = {
    type: 'bar',
    data: {
      labels: ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5'],
      datasets: [
        {
          label: 'Number of Attendees',
          data: [5, 4, 6, 3, 4],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(234, 43, 70)',
            'rgb(250, 200, 88)',
            'rgb(25, 224, 58)'
          ]
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1
    }
    }

export default attendanceCodeData