<!-- This view allows a user to view/update a specific client's information. -->
<template>
  <main>
    <!--Header-->
    <h1 class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10">
      Client Details
    </h1>
    <div class="px-10 py-20">
      <!-- grid container -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
        <h2 class="text-2xl font-bold">Personal Details</h2>
        <!-- First Name input field -->
        <div class="flex flex-col">
          <label class="block">
            <span class="text-gray-700">First Name</span>
            <span style="color: #ff0000">*</span>
            <input type="text"
              class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder v-model="client.firstName" />
          </label>
          <!-- Validation error messages -->
          <span v-if="v$.client.firstName.$error" class="text-red-500">
            First Name is required
          </span>
        </div>

        <!-- Middle name input field -->
        <div class="flex flex-col">
          <label class="block">
            <span class="text-gray-700">Middle Name</span>
            <input type="text"
              class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder v-model="client.middleName" />
          </label>
        </div>

        <!-- Last Name input field -->
        <div class="flex flex-col">
          <label class="block">
            <span class="text-gray-700">Last Name</span>
            <span style="color: #ff0000">*</span>
            <input type="text"
              class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder v-model="client.lastName" />
          </label>
          <!-- Validation error messages -->
          <span v-if="v$.client.lastName.$error" class="text-red-500">
            Last Name is required
          </span>
        </div>
        <div></div>
        <!-- Email input field -->
        <div class="flex flex-col">
          <label class="block">
            <span class="text-gray-700">Email</span>
            <input type="email"
              class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              v-model="client.email" />
          </label>
          <!-- Validation error messages -->
          <span v-if="v$.client.email.$error" class="text-red-500">
            Valid Email is required
          </span>
        </div>
        <!-- Phone number input field -->
        <div class="flex flex-col">
          <label class="block">
            <span class="text-gray-700">Phone Number</span>
            <span style="color: #ff0000">*</span>
            <input type="text"
              class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              pattern="^[0-9]{3}[0-9]{3}[0-9]{4}$" v-model="client.phoneNumber.primary" />
          </label>
          <!-- Validation error messages -->
          <span v-if="v$.client.phoneNumber.primary.$error" class="text-red-500">
            <span v-if="v$.client.phoneNumber.primary.required.$invalid">Phone Number is required</span>
            <span
              v-else-if="!v$.client.phoneNumber.primary.required.$invalid && v$.client.phoneNumber.primary.numeric.$invalid">
              Phone Number must contain only digits
            </span>
            <span
              v-else-if="!v$.client.phoneNumber.primary.required.$invalid && !v$.client.phoneNumber.primary.numeric.$invalid && (v$.client.phoneNumber.primary.minLength.$invalid || v$.client.phoneNumber.primary.maxLength.$invalid)">
              Phone Number must be exactly 10 digits
            </span>
          </span>
        </div>
        <!-- Alternative phone number input field -->
        <div class="flex flex-col">
          <label class="block">
            <span class="text-gray-700">Alternative Phone Number</span>
            <input type="text"
              class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}" v-model="client.phoneNumber.alternate" />
          </label>
        </div>
      </div>

      <!-- grid container -->
      <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
        <h2 class="text-2xl font-bold">Address Details</h2>
        <!-- Address 1 input field -->
        <div class="flex flex-col">
          <label class="block">
            <span class="text-gray-700">Address Line 1</span>
            <input type="text"
              class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              v-model="client.address.line1" />
          </label>
        </div>
        <!-- Address 2 input field -->
        <div class="flex flex-col">
          <label class="block">
            <span class="text-gray-700">Address Line 2</span>
            <input type="text"
              class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              v-model="client.address.line2" />
          </label>
        </div>
        <!-- City input field -->
        <div class="flex flex-col">
          <label class="block">
            <span class="text-gray-700">City</span>
            <span style="color: #ff0000">*</span>
            <input type="text"
              class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              v-model="client.address.city" />
          </label>
          <!-- Validation error messages -->
          <span v-if="v$.client.address.city.$error" class="text-red-500">
            City is required
          </span>
        </div>
        <div></div>
        <!-- County input field -->
        <div class="flex flex-col">
          <label class="block">
            <span class="text-gray-700">County</span>
            <input type="text"
              class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              v-model="client.address.county" />
          </label>
        </div>
        <!-- Zip code input field -->
        <div class="flex flex-col">
          <label class="block">
            <span class="text-gray-700">Zip Code</span>
            <input type="text"
              class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              v-model="client.address.zip" />
          </label>
        </div>
        <div></div>
      </div>

      <!-- grid container -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
        <div class="flex justify-between mt-10 mr-20"></div>
        <!--Update Client submit button-->
        <div class="flex justify-between mt-10 mr-20">
          <button @click="submitUpdateClient" type="submit" class="bg-green-700 disabled:opacity-50 text-white rounded"
            :disabled="user.role === 'viewer'">
            Update Client
          </button>
        </div>
        <!--Delete Client button-->
        <div class="flex justify-between mt-10 mr-20">
          <button @click="submitDeleteClient" type="submit" class="bg-red-700 disabled:opacity-50 text-white rounded"
            :disabled="user.role === 'viewer'">
            Delete Client
          </button>
        </div>

        <div class="flex justify-between mt-10 mr-20">
          <!-- Mobile Notify button -->
          <div class="flex justify-between mt-5 mr-20">
            <button @click="mobileNotify" type="button" class="bg-blue-500 disabled:opacity-50 text-white rounded"
              :disabled="user.role === 'viewer'">
              Mobile Notify
            </button>
          </div>
          <!-- Email Notify button -->
          <div class="flex justify-between mt-5 mr-20">
            <button @click="emailNotify" type="button" class="bg-blue-500 disabled:opacity-50 text-white rounded"
              :disabled="user.role === 'viewer'">
              Email Notify
            </button>
          </div>
        </div>
        <!--Go back button-->
        <div class="flex justify-between mt-10 mr-20">
          <button type="reset" class="border border-red-700 bg-white text-red-700 rounded" @click=this.$router.back()>
            Go back
          </button>
        </div>
      </div>
    </div>

    <hr class="mt-10 mb-10" />

    <!-- Client Event Information -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 mr-10">
      <div class="ml-10">
        <h2 class="text-2xl font-bold">Events for Client</h2>
        <h3 class="italic">Click table row to view event details</h3>
      </div>
      <div class="flex flex-col col-span-2">
        <table class="min-w-full shadow-md rounded">
          <thead class="bg-gray-50 text-xl">
            <tr>
              <th class="p-4 text-left">Event Name</th>
              <th class="p-4 text-left">Date</th>
              <th class="p-4"></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-300">
            <tr @click="$router.push({ name: 'eventdetails', params: { id: event._id } })" 
            v-for="event in clientEvents" :key="event._id" class="cursor-pointer" 
              :class="{ 'hoverRow': hoverId === event._id }" @mouseenter="hoverId = event._id" @mouseleave="hoverId = null">
              <td class="p-2 text-left">{{ event.name }}</td>
              <td class="p-2 text-left">{{ formatDate(event.date) }}</td>
              <td class="p-2 text-right">
                <span class="remove-btn-wrapper">
                  <span class="remove-btn text-gray-400 cursor-pointer"
                    @click.stop="removeClientFromEvent(client._id, event._id)" v-if="hoverId === event._id">X</span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex flex-col">
        <!--MultiSelect to add client to events-->
        <VueMultiselect
          class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 cursor-pointer"
          v-model="eventsSelected" :options="eventsFiltered" :custom-label="nameWithDate" :multiple="true"
          :close-on-select="true" placeholder="Select Events to be added" label="date" track-by="name" />
        <div class="flex justify-between">
          <!--button to add client to events-->
          <button @click="addClientToEvent" type="submit" class="mt-5 bg-red-700 disabled:opacity-50 text-white rounded"
            :disabled="eventsSelected.length === 0 || user.role === 'viewer'">
            Add Client to Selected Events
          </button>
        </div>
      </div>

    </div>
  </main>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email, numeric, minLength, maxLength } from '@vuelidate/validators'
import VueMultiselect from 'vue-multiselect'
import { useLoggedInUserStore } from "../store/loggedInUser";
import { getClientById, getClientEvents, getNonClientEvents, registerAttendee, deregisterAttendee, updateClient, deleteClientbyId } from '../api/api'
import { useToast } from 'vue-toastification'

//Notifications
const toast = useToast()

export default {
  // register components
  components: {
    VueMultiselect,
  },
  setup() {
    // register Vuelidate and loggedIn store
    const v$ = useVuelidate();
    const user = useLoggedInUserStore();
    return { v$, user };
  },
  data() {
    return {
      // events that the client is not registered in - to be shown in the multiselect
      eventsFiltered: [],
      // events that user selects from multiselect list
      eventsSelected: [],
      //variable to hold the events that the selected client is associated with
      clientEvents: [],
      //variable to hold client information  
      client: {
        firstName: null,
        middleName: null,
        lastName: null,
        email: null,
        phoneNumber: {
          primary: null,
          alternate: null
        },
        address: {
          line1: null,
          line2: null,
          city: null,
          county: null,
          zip: null
        }
      },
      // variable stores the ID of the row that the mouse is currently hovering over (to highlight the row red)
      hoverId: null
    }
  },
  validations() {
    // validations
    return {
      client: {
        firstName: { required },
        lastName: { required },
        email: { required, email },
        phoneNumber: {
          primary: {
            required,
            numeric,
            minLength: minLength(10),
            maxLength: maxLength(10),
          },
        },
        address: {
          city: { required },
        },
      },
    };
  },
  async mounted() {
    // when component is mounted, data is loaded
    // get client information, events the client is registered in, and events that client is not registered in
    try {
      const [clientResponse, clientEventsResponse, nonClientEventsResponse] = await Promise.all([
        getClientById(this.$route.params.id),
        getClientEvents(this.$route.params.id),
        getNonClientEvents(this.$route.params.id),
      ]);

      this.client = clientResponse;
      this.clientEvents = clientEventsResponse;
      this.eventsFiltered = nonClientEventsResponse;

    } catch (error) {
      toast.error('error loading data:', error)
    }
  },
  methods: {
    // method called to format the event date
    formatDate(date) {
      const isoDate = new Date(date);
      const year = isoDate.getUTCFullYear();
      const month = String(isoDate.getUTCMonth() + 1).padStart(2, '0');
      const day = String(isoDate.getUTCDate()).padStart(2, '0');
      return `${month}/${day}/${year}`;
    },
    //custom label for multiselect
    nameWithDate({ name, date }) {
      return `${name} (${this.formatDate(date)})`
    },

    // method called to remove client from event
    async removeClientFromEvent(clientId, eventId) {
      // remove client ID from the "attendees" array for that event
      try {
        const response = await deregisterAttendee(eventId, clientId);
        toast.success(response)
      } catch (error) {
        toast.error(error);
      }
      // update events for which client is registered, and events for which client is not registered
      try {
        this.clientEvents = await getClientEvents(this.$route.params.id);
        this.eventsFiltered = await getNonClientEvents(this.$route.params.id);
      } catch (error) {
        toast.error(error);
      }
    },

    // method called to add client to an event
    async addClientToEvent() {
      try {
        const client = this.client._id;
        const events = this.eventsSelected.map((event) => event._id);
        const promises = [];

        for (const eventId of events) {
          promises.push(registerAttendee(eventId, client));
        }

        Promise.all(promises)
          .then(async () => {
            try {
              this.clientEvents = await getClientEvents(this.$route.params.id);
              this.eventsFiltered = await getNonClientEvents(this.$route.params.id);
              this.eventsSelected = [];
            } catch (error) {
              toast.error(error);
            }
          })
          .catch((error) => {
            toast.error(error);
          });
      } catch (error) {
        toast.error(error);
      }

    },

    // update client information
    async submitUpdateClient() {
      // Trigger validation
      this.v$.$validate();

      if (this.v$.$error) {
        // Form is invalid, do not proceed
        return;
      }

      try {
        const response = await updateClient(this.$route.params.id, this.client);
        this.$router.push('/findclient')
        toast.success(response)
      } catch (error) {
        toast.error(error)
      }
    },

    // method called when user attempts to delete client
    async submitDeleteClient() {
      try {
        const response = await deleteClientbyId(this.$route.params.id);
        toast.success(response)
        this.$router.push('/findclient')
      } catch (error) {
        toast.error(error);
      }
    },
    // Mobile Notify method
    async mobileNotify() {
      try {
        const phoneNumber = this.client.phoneNumber.primary;
        const eventDetails = this.clientEvents.map((event) => `${event.name} (${this.formatDate(event.date)})`);

        // Prepare the message content
        const message = `Dear ${this.client.firstName},\n\nYou are registered for the following events:\n${eventDetails.join('\n')}\n\nThank you!`;

        // Send the SMS notification using Twilio
        const accountSid = 'YOUR_TWILIO_ACCOUNT_SID'; //Replace with your Twilio account SID
        const authToken = 'YOUR_TWILIO_AUTH_TOKEN'; //Replace with your Twilio auth token
        const client = twilio(accountSid, authToken);

        await client.messages.create({
          body: message,
          from: 'YOUR_TWILIO_PHONE_NUMBER', //Replace with your Twilio phone number
          to: phoneNumber,
        });

        toast.success('Mobile notification sent successfully');
      } catch (error) {
        toast.error('Failed to send mobile notification');
        console.error(error);
      }
    },

    // Email Notify method
    async emailNotify() {
      try {
        const email = this.client.email;
        const eventDetails = this.clientEvents.map((event) => `${event.name} (${this.formatDate(event.date)})`);

        // Prepare the email content
        const subject = 'Event Notification';
        const body = `Dear ${this.client.firstName},<br><br>You are registered for the following events:<br>${eventDetails.join('<br>')}<br><br>Thank you!`;

        // Send the email notification using SendGrid
        sgMail.setApiKey('YOUR_SENDGRID_API_KEY'); //Replace with your SendGrid API key

        const msg = {
          to: email,
          from: 'YOUR_EMAIL', //The email address you want to use as the sender for email notifications
          subject: subject,
          html: body,
        };

        await sgMail.send(msg);

        toast.success('Email notification sent successfully');
      } catch (error) {
        toast.error('Failed to send email notification');
        console.error(error);
      }
    },
  }
}
</script>

<!--Style for multiselect-->
<style src="vue-multiselect/dist/vue-multiselect.css"></style>

<style scoped>
.remove-btn-wrapper {
  display: inline-block;
  position: relative;
}

.remove-btn:hover {
  color: black;
}
</style>
