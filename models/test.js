// user
// {
//   firstname
//   lastname
//   email
//   password
//   date_of_birth
//   phone
//   city
//   profilepicture
//   username(firstname + genratednumber)//hassan10055
//   organizer >> Boolean
//   commited >> %
//   number_of_appointment
// }

// origanizer{
// user_id_Fk
// name_of_organization
// title
// contact -notrequired
// description -notrequired
// individual>>Boolean
// industry_ID_FK
// available_days[sun]
// available_hours[13:00]
// amount_of_required_daposit -notrequired
// question -notrequired
// rating
// number_of_appointment
// total_paid_money
// }

// industry{
//   name
//   description
//   cancelation-time
//   allow-payment
// }

// appointment{
//   made-by -user_id_Fk
//   made-to -organizer_id_Fk
//   starts_on
//   status//pending-confirmed-done-canceledByuser-canceledByOrganizer
//   deposit_paid
//   duration
//   answer
// }

// admin
// websitfe ino
// blog
//=====================================================================
//send notification to organiser
// reservedByUser: {
// 	type: Boolean,
// 	required: true,
// 	default: true,
// },
//send notification to user
// confirmedByOrganizer: {
// 	type: Boolean,
// 	required: true,
// 	default: false,
// },
//send notification to organiser [and interested users if existed]
// canceledByUser: {
// 	type: Boolean,
// 	required: true,
// 	default: false,
// },
//send notification to user
// canceledByOrganizer: {
// 	type: Boolean,
// 	required: true,
// 	default: false,
// },
//2hours pre-appDateTime
// reminderNotification: {
// 	type: Date,
// 	required: true,
// 	default: new Date()
// },
//12hours post-appDateTime
// FeedbackNotification: {
// 	type: Date,
// 	required: true,
// 	default: new Date()
// },
//=====================================================================
// sending emails to user and organizer before 2hours from the meeting
// sending emails to user and organizer after 12hours from the meeting for feedback
// sending emails to user and organizer in case of cancelation
// sending emails to user in case of aproval
// sending emails to organizer in case of creation(pending)
