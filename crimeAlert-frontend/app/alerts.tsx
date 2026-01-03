import React, { useEffect, useState } from "react";
import { useWindowDimensions } from 'react-native';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { getAlerts } from "../src/services/alertService";
import AlertItem from "../src/components/AlertItem";
import FooterTabs from "../src/components/FooterTabs";

export type AlertSeverity = "low" | "medium" | "high";

export interface Alert {
  id: string;
  type: string;
  message: string;
  latitude: number;
  longitude: number;
  timestamp: string;
  severity: AlertSeverity;
  isRead?: boolean;
}

export default function AlertsScreen() {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState<'all' | 'saved'>('all');

  const router = useRouter();
  const { width } = useWindowDimensions();

  useEffect(() => {
    fetchAlerts();
  }, []);

  const fetchAlerts = async () => {
    try {
      setLoading(true);
      const token = "dummy-token";
      const data = await getAlerts(token);

      const sorted = data.sort(
        (a: Alert, b: Alert) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );

      setAlerts(sorted);
    } catch (error) {
      console.error("Failed to fetch alerts:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredAlerts = selectedTab === 'all' ? alerts : alerts.filter(a => a.isRead);

  const handleAlertPress = (alert: Alert) => {
    setAlerts((prev) =>
      prev.map((a) =>
        a.id === alert.id ? { ...a, isRead: true } : a
      )
    );
    router.push("/");
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}> 
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.bigTitle}>Alerts &{"\n"}Notifications</Text>

        {/* Tab Selector */}
        <View style={styles.segment}>
          <TouchableOpacity
            style={[styles.segmentButton, selectedTab === 'all' && styles.segmentActive]}
            onPress={() => setSelectedTab('all')}
          >
            <Text style={[styles.segmentText, selectedTab === 'all' && styles.segmentTextActive]}>
              All
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.segmentButton, selectedTab === 'saved' && styles.segmentActive]}
            onPress={() => setSelectedTab('saved')}
          >
            <Text style={[styles.segmentText, selectedTab === 'saved' && styles.segmentTextActive]}>
              Saved Zones
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Alerts List */}
      <FlatList
        data={filteredAlerts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AlertItem alert={item} onPress={() => handleAlertPress(item)} />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No alerts available</Text>
        }
        scrollEnabled={true}
        nestedScrollEnabled={true}
        contentContainerStyle={{ paddingBottom: 20, paddingHorizontal: 12 }}
      />

      {/* Footer Tabs */}
      <FooterTabs active="alerts" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FBFB',
    width: '100%',
    position: 'relative',
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 16,
  },
  bigTitle: {
    fontSize: 30,
    fontWeight: "800",
    color: '#0f172a',
    marginBottom: 12,
    lineHeight: 36,
  },
  segment: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    borderRadius: 12,
    padding: 6,
    borderWidth: 1.6,
    borderColor: '#16A34A',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  segmentButton: {
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  segmentActive: {
    backgroundColor: '#16A34A',
    shadowColor: '#16A34A',
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 2,
  },
  segmentText: {
    color: '#16A34A',
    fontWeight: '700',
    fontSize: 14,
  },
  segmentTextActive: {
    color: '#fff',
  },
  emptyText: {
    textAlign: "center",
    marginTop: 40,
    color: "#777",
    fontSize: 16,
  },
});