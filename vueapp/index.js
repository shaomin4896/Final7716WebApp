const { createApp, ref, computed, watch, onMounted } = Vue;
import { drawBarChart, drawPieChart } from "./chart.js";
import { GetEmployees, ListeningRecordCollection } from "./dbcontext.js";  // Corrected import

const App = {
    setup() {
        const employees = ref([]);
        const notify = ref({
            datetime: "yyyyMMdd",
            message: "messagggggeeee",
            time: "timestring",
        });
        const emotionCount = computed(()=> {
            let emotionCount = employees.value.reduce((acc, employee) => {
                const { emotion } = employee;
                acc[emotion] = (acc[emotion] || 0) + 1;
                return acc;
            }, {});
            return emotionCount;
        })

        const events = ref({
            barchart: async function () {
                drawBarChart(emotionCount.value);
            },
            piechart: async function () {
                drawPieChart(emotionCount.value);
            }
        });

        onMounted(async () => {
            var toastElList = [].slice.call(document.querySelectorAll('.toast'));
            var toastList = toastElList.map(function (toastEl) {
                return new bootstrap.Toast(toastEl)
            });
            ListeningRecordCollection(async (newRecord) => {
                console.log(newRecord);
                const datetime = newRecord.punch_time.toDate();
                employees.value.push(newRecord);
                notify.value.datetime = new Date().toLocaleString();
                notify.value.message = `${newRecord.emp_name} 已打卡`;
                notify.value.time = datetime.toLocaleTimeString();
                toastList[0].show();
            });
        })

        return {
            employees, notify, events
        }
    }
}

const app = Vue.createApp(App)
app.mount('#app')