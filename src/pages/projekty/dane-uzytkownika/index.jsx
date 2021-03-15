import React, { useState, useEffect } from "react";
import SEO from "src/seo";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
} from "@material-ui/core";

export default function index() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const battery = await navigator.getBattery();
      const xd = [
        ["navigator.appVersion", navigator.appVersion],
        ["navigator.appCodeName", navigator.appCodeName],
        ["navigator.appName", navigator.appName],
        ["navigator.cookieEnabled", navigator.cookieEnabled],
        ["navigator.deviceMemory", navigator.deviceMemory],
        ["navigator.doNotTrack", navigator.doNotTrack],
        ["navigator.hardwareConcurrency", navigator.hardwareConcurrency],
        ["navigator.language", navigator.language],
        ["navigator.languages", navigator.languages],
        ["navigator.maxTouchPoints", navigator.maxTouchPoints],
        ["navigator.onLine", navigator.onLine],
        ["navigator.platform", navigator.platform],
        ["navigator.product", navigator.product],
        ["navigator.productSub", navigator.productSub],
        ["navigator.userAgent", navigator.userAgent],
        ["navigator.vendor", navigator.vendor],
        [
          "navigator.connection.effectiveType",
          navigator.connection.effectiveType,
        ],
        ["navigator.connection.rtt", navigator.connection.rtt],
        ["navigator.connection.downlink", navigator.connection.downlink],
        ["navigator.getBattery()=>battery.level", battery.level],
        ["navigator.getBattery()=>battery.charging", battery.charging],
        ["navigator.getBattery()=>battery.chargingTime", battery.chargingTime],
        ["navigator.javaEnabled", navigator.javaEnabled()],
        ["document.characterSet", document.characterSet],
        ["document.contentType", document.contentType],
        ["document.referrer", document.referrer],
        ["document.timeline.currentTime", document.timeline.currentTime],
        ["document.title", document.title],
        ["Date.now()", Date.now()],
        ["new Date()", new Date()],
      ].map(([a, b]) => [a, JSON.stringify(b, null, 2)]);
      setData(xd);
    })();
  }, []);
  return (
    <>
      <SEO title="Dane użytkownika" />
      <h1>Dane użytkownika</h1>
      <Paper elevation={8}>
        <Table aria-label="simple table">
          <TableBody>
            {data.map(([a, b]) => (
              <TableRow key={a}>
                <TableCell>{a}</TableCell>
                <TableCell>{b}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}
