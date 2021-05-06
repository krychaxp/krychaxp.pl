import { useState, useEffect } from "react";
import { getCoronaCountry, getCoronaCountries } from "src/api";
import Highcharts from "highcharts";
import exporting from "highcharts/modules/exporting";
import { FullWidth } from "./index.styles";
import {
  Loading,
  CopyButton,
  SelectCountry,
  SelectPeriod,
  TableData,
  periodArray,
} from "./others";

export const CoronavirusBox = () => {
  const [coronavirus, setCoronavirus] = useState(null);
  const [period, setPeriod] = useState(periodArray[0].id);
  const [series, setSeries] = useState([]);
  const [activeCountry, setActiveCountry] = useState("poland");
  const [countries, setCountries] = useState([]);
  const createChart = () => {
    if (!(coronavirus && series.length && countries.length)) return;
    exporting(Highcharts);
    // accessibility(Highcharts);
    Highcharts.chart("container", {
      chart: {
        type: "area", //areaspline
      },
      title: {
        text: `Rozprzestrzenianie się koronawirusa w ${
          countries.find((v) => v.Slug == activeCountry).Country
        }`,
      },
      subtitle: {
        text: `Ostatnie odświeżenie:${coronavirus.today}`,
      },
      xAxis: {
        categories: coronavirus.date.slice(period),
      },
      yAxis: {
        title: {
          text: "Liczba ludzi",
        },
      },
      tooltip: {
        split: true,
      },

      series: series,
    });
  };
  const updateTable = () => {
    if (!coronavirus) return;
    const data = coronavirus.data;
    const newSeries = Object.entries({
      "Zarażonych (ogółem)": data.map((v) => v.Confirmed),
      "Zarażonych (aktywnych)": data.map((v) => v.Active),
      "Zgony (ogółem)": data.map((v) => v.Deaths),
      "Wyzdrowień (ogółem)": data.map((v) => v.Recovered),
      "Nowych Zarażonych": data.map(
        (v, i, arr) => v.Confirmed - (arr[i - 1]?.Confirmed || 0)
      ),
      "Nowych Zgonów": data.map(
        (v, i, arr) => v.Deaths - (arr[i - 1]?.Deaths || 0)
      ),
      "Nowych Wyzdrowień": data.map(
        (v, i, arr) => v.Recovered - (arr[i - 1]?.Recovered || 0)
      ),
    }).map(([a, b]) => ({
      name: a,
      data: b.slice(period),
    }));
    setSeries(newSeries);
  };
  const updateAllCountries = () => {
    getCoronaCountries()
      .then((val) => {
        setCountries(val.sort((a, b) => (a.Country > b.Country ? 1 : -1)));
      })
      .catch((e) => {
        window.setAlert(
          "error",
          `Nie udało się pobrać danych krajów. (Spróbuj odświeżyć stronę)`
        );
      });
  };
  const updateDataByCoutry = () => {
    getCoronaCountry(activeCountry)
      .then((val) => {
        const data = val.map((v) => ({
          ...v,
          Date: new Date(v.Date).toLocaleDateString(),
        }));
        setCoronavirus({
          length: data.length,
          today: data.slice(-1)[0].Date,
          data: data,
          date: data.map((v) => v.Date),
        });
      })
      .catch((e) => {
        window.setAlert(
          "error",
          `Nie udało się pobrać danych z ${activeCountry}.`
        );
      });
  };
  useEffect(updateDataByCoutry, [activeCountry]);
  useEffect(updateAllCountries, []);
  useEffect(updateTable, [coronavirus, period]);
  useEffect(createChart, [period, series, countries]);
  if (!coronavirus || !series.length || !countries.length) {
    return (
      <FullWidth>
        <Loading />
      </FullWidth>
    );
  }
  return (
    <FullWidth>
      <SelectPeriod period={period} setPeriod={setPeriod} />
      <SelectCountry
        activeCountry={activeCountry}
        setActiveCountry={setActiveCountry}
        countries={countries}
      />
      <div id="container"></div>
      <hr />
      <CopyButton
        series={series}
        coronavirus={coronavirus}
        period={period}
        activeCountry={activeCountry}
      />
      <TableData series={series} coronavirus={coronavirus} period={period} />
    </FullWidth>
  );
};
