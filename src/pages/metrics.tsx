import { Can } from "../components/Can";
import { useAuth } from "../contexts/AuthContext"
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Metrics() {
  const { user } = useAuth();

  return (
    <>
      <h1>Metrics: {user?.email}</h1>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {}
  }
}, {
  permissions: ['metrics.list'],
  roles: ['administrator'],
})